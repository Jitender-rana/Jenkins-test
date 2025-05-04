pipeline {
    agent {
        node {
            label 'docker-agent-nodejs'
        }
    }

    environment {
        DOCKER_USERNAME = credentials('docker-username') // Jenkins credentials ID
        DOCKER_PASSWORD = credentials('docker-password') // Jenkins credentials ID
    }

    triggers {
        pollSCM('* * * * *') // Poll every minute
    }

    stages {
        stage('Build') {
            steps {
                echo 'Installing dependencies and running app...'
                sh '''
                    npm install
                    node index.js
                '''
            }
        }

        stage('Test') {
            steps {
                echo 'Testing...'
                // Add test commands here if you have any
            }
        }

        stage('Deliver') {
            steps {
                echo 'Pushing Docker image to DockerHub...'
                sh '''
                    docker build -t jitenderrana/my-node-app:latest .
                    echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
                    docker push jitenderrana/my-node-app:latest
                '''
            }
        }
    }
}
