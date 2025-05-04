pipeline {
    agent { 
        node {
            label 'docker-agent-nodejs'
            }
      }
    triggers {
        pollSCM '* * * * *'
    }
    stages {
        stage('Build') {
            steps {
                echo "Building.."
                sh '''
                
                npm install
                node index.js
                '''
            }
        }
        stage('Test') {
            steps {
                echo "Testing.."

            }
        }
        stage('Deliver') {
            steps {
                echo 'Deliver....'
                sh '''
                echo "doing delivery stuff.."
                '''
            }
        }
    }
}