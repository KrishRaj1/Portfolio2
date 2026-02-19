pipeline {
    agent {
        label 'react-slave'
    }
    environment{
        DEPLOY_PATH = "/var/www/html"
    }

    stages {
        stage('git checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/KrishRaj1/Portfolio2.git'
            }
        }
        stage('Install Dependency'){
            steps {
                 sh 'npm install '
            }
        }
        stage('Build App'){
            steps{
                sh 'npm run build'
            }
        }
        stage('Deploy to ngnix'){
            steps{
                sh '''
                rm -rf $DEPLOY_PATH/*
                cp -r dist/* $DEPLOY_PATH/
                '''
            }
        }
    }
            post{
                success{
                    echo "Deployment successful"
                }
                failure{
                    echo "Build failed"
                }
            }
}

