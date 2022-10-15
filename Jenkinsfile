pipeline {

   tools {nodejs "nodejs"}

  environment {
    dockerimagename = "arjunscorpio2000/jenkins-node-project"
    dockerImage = ""
  }

  agent any

  stages {

    stage('Checkout Source') {
      steps {
        git 'https://github.com/injusticescorpio/jenkins-nodeapp.git'
      }
    }

      stage('Run and test image') {
      steps {
        catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
          sh 'npm install'
          sh "npm t"
        }
      }
    }


    stage('Build image') {
      steps{
        script {
          dockerImage = docker.build dockerimagename
        }
      }
    }

    stage('Pushing Image') {
      environment {
               registryCredential = 'dockerhubarjunlogin'
           }
      steps{
        script {
           sh 'node --version'
          docker.withRegistry( 'https://registry.hub.docker.com', registryCredential ) {
            dockerImage.push("latest")
          }
        }
      }
    }

    stage('Deploying App to Kubernetes') {
      steps {
        script {
          kubernetesDeploy(configs: "k8/node-deployment-service.yaml", kubeconfigId: "kubernetes-arjun")
        }
      }
    }

  }

}