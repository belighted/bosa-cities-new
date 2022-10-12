import groovy.transform.Field

@Field def job_base_name            = ""
@Field def build_number             = ""
@Field def jenkins_server_name      = ""
@Field def branch_name              = ""
@Field def codePath                 = ""
@Field def docker_registry_credId   = "asergo-docker-registry"
@Field def docker_img_prod          = "nexus.asergo.com/2483/prod"
@Field def docker_img_apps          = "nexus.asergo.com/2483/apps"
@Field def docker_img_base          = "nexus.asergo.com/2483/base"
@Field def kube_conf_url            = "https://2483-jier9.k8s.asergo.com:6443/"
@Field def kube_conf_url_prod       = "https://2483-im9eu.k8s.asergo.com:6443/"

podTemplate(
        label: 'docker-slave',
        containers: [
                containerTemplate(
                        name: 'docker',
                        image: 'docker:stable-dind',
                        ttyEnabled: true,
                        alwaysPullImage: true,
                        privileged: true,
                        command: "dockerd --host=unix:///var/run/docker.sock --host=tcp://0.0.0.0:2375 --storage-driver=overlay2"
                )
        ],
        volumes: [
                emptyDirVolume(memory: false, mountPath: '/var/lib/docker')
        ]
) {
    try {
        node("docker-slave") {
            container("docker") {
                stage('Project setup') {
                    //checking out the app code
                    echo 'Checkout the code..'
                    checkout scm
                    branch_name = env.BRANCH_NAME
                    build_number = env.BUILD_NUMBER
                    job_base_name = "${env.JOB_NAME}".split('/').last()
                    jenkins_server_name = env.BUILD_URL.split('/')[2].split(':')[0]
                    echo "Jenkins checkout from branch: $branch_name && $build_number"
                    echo "Running job ${job_base_name} on jenkins server ${jenkins_server_name}"
                    codePath = pwd()
                    sh "ls -lth"
                }

                switch (job_base_name){
                    default:
                        break

                    case ~/^rc-\d+\.\d+\.\d+$/:
                        withDockerRegistry([credentialsId: "${docker_registry_credId}", url: "https://${docker_img_apps}/"]) {
                            stage("Build test_runner") {
                                dir("ops/release/test_runner") {
                                    sh "./build"
                                    echo "Done!"
                                }
                            }
                            stage("Compile Assets") {
                                sh """
                                    docker run -e RAILS_ENV=production --env-file ${codePath}/ops/release/test_runner/app_env -v ${codePath}/public:/app/public bosa-cities-new-027-testrunner:latest bundle exec rake assets:clean
                                    docker run -e RAILS_ENV=production --env-file ${codePath}/ops/release/test_runner/app_env -v ${codePath}/public:/app/public bosa-cities-new-027-testrunner:latest /bin/bash -c "yarn install --silent --no-progress --no-audit --no-optional && bundle exec rake assets:precompile"
                                """
                            }
                            stage("Build app image"){
                                sh "TAG=$job_base_name ${codePath}/ops/release/app/build"
                                sh "TAG=$job_base_name ${codePath}/ops/release/assets/build"
                                // This will push the assets image to registry
                                pushToNexus(
                                        "${docker_registry_credId}",
                                        "${docker_img_apps}",
                                        "${docker_img_apps}/bosa-cities-new-027-assets:$job_base_name"
                                )
                                // This will push the app image to registry
                                pushToNexus(
                                        "${docker_registry_credId}",
                                        "${docker_img_apps}",
                                        "${docker_img_apps}/bosa-cities-new-027:$job_base_name"
                                )
                            }
                        }
                        stage('Deploy bosa-cities-new-027 to uat'){
                            kubeDeploy(
                                    "v1.20.0",
                                    "kube-jenkins-robot",
                                    "${kube_conf_url}",
                                    "bosa-cities-new-027",
                                    "bosa-uat",
                                    ["bosa-cities-new-027", "bosa-cities-new-027-assets" ],
                                    ["${docker_img_apps}/bosa-cities-new-027:$job_base_name", "${docker_img_apps}/bosa-cities-new-027-assets:$job_base_name"]
                            )
                        }
                        stage('Deploy sidekiq to uat'){
                            kubeDeploy(
                                    "v1.20.0",
                                    "kube-jenkins-robot",
                                    "${kube_conf_url}",
                                    "bosa-cities-new-027-sidekiq",
                                    "bosa-uat",
                                    ["bosa-cities-new-027-sidekiq" ],
                                    ["${docker_img_apps}/bosa-cities-new-027:$job_base_name"]
                            )
                        }
                        break

                    //case ~/^\d+\.\d+\.\d+$/:
                    //    stage('Promot image uat->prod'){
                    //        promoteImages(
                    //                "${docker_registry_credId}",
                    //                "${docker_img_apps}",
                    //                "${docker_img_prod}",
                    //                ["bosa-cities-new-027", "bosa-cities-new-027-assets"],
                    //                ["bosa-cities-new-027", "bosa-cities-new-027-assets"]
                    //        )
                    //    }
                    //    stage('Deploy app to prod'){
                    //        kubeDeploy(
                    //                "v1.20.0",
                    //                "kube-jenkins-robot-prod",
                    //                "${kube_conf_url_prod}",
                    //                "bosa-cities-new-027",
                    //                "bosa-prod",
                    //                ["bosa-cities-new-027", "bosa-cities-new-027-assets" ],
                    //                ["${docker_img_prod}/bosa-cities-new-027:${job_base_name}", "${docker_img_prod}/bosa-cities-new-027-assets:${job_base_name}"]
                    //        )
                    //    }
                    //    stage('Deploy sidekiq to prod'){
                    //        kubeDeploy(
                    //                "v1.20.0",
                    //                "kube-jenkins-robot-prod",
                    //                "${kube_conf_url_prod}",
                    //                "bosa-cities-new-027-sidekiq",
                    //                "bosa-prod",
                    //                ["bosa-cities-new-027-sidekiq" ],
                    //                ["${docker_img_prod}/bosa-cities-new-027:${job_base_name}"]
                    //        )
                    //    }
                    //    break
                }
            }
        }
    }
    catch (e) {
        // If there was an exception thrown, the build failed
        currentBuild.result = "FAILED"
        throw e
    }
}

// This method will help us push the docker image to Nexus Sonatype docker private registry
def pushToNexus(String registryCredId, String registryUrl, String image){
    withDockerRegistry([credentialsId: registryCredId, url: "https://${registryUrl}"]) {
        sh "docker push ${image}"
    }
}

// This method will allow us to promot images from UAT to PROD
def promoteImages(String registryCredId, String srcUrl, String dstUrl, List srcImages, List dstImages ){
    withDockerRegistry([credentialsId: "${registryCredId}", url: "https://${srcUrl}/"]) {
        for (int i = 0; i < srcImages.size() ; i++) {
            sh "docker pull ${srcUrl}/${srcImages[i]}:rc-${job_base_name}"
            sh "docker tag ${srcUrl}/${srcImages[i]}:rc-${job_base_name} ${dstUrl}/${dstImages[i]}:${job_base_name}"
        }
        for (int i = 0; i < dstImages.size(); i++) {
            sh "docker push ${dstUrl}/${dstImages[i]}:${job_base_name}"
        }
    }
}

// This method will help us trigger kubectl for a rolling update - no downtime expected
def kubeDeploy(String kubectlVersion, String credentialsId, String kubeServerUrl, String deployName, String namespace, List container, List image){
    try {

        // Install kubectl in the docke:stable-dind which is a alpine image, we do not want to bake the image
        sh """
           echo "nameserver 8.8.8.8" > /etc/resolv.conf
           cat /etc/resolv.conf
           apk add curl
           curl -LO https://dl.k8s.io/release/${kubectlVersion}/bin/linux/amd64/kubectl
           install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl
           kubectl version --client
           """
        // Using a Secret text in jenkins credentials see https://plugins.jenkins.io/kubernetes-cli/
        withKubeConfig([
                credentialsId: "${credentialsId}",
                serverUrl    : "${kubeServerUrl}"
        ]) {
            // if there are multiple containers in a pod we need to loop and update all.
            for (int i = 0; i < container.size() ; i++) {
                sh """
                   kubectl set image deployment/$deployName \
                                     ${container[i]}=${image[i]} \
                                     -n $namespace \
                                     --record
                   
                   """
            }
            // Checking how our deployment status is
            sh """
               kubectl rollout status deployment/${deployName} --timeout=180s -n ${namespace}
            """

        }
    } catch(e){
        currentBuild.result = "FAILED"
        throw e
    }
}
