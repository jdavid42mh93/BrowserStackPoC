pipeline {
    agent any
    environment {
        BROWSERSTACK_BUILD_NAME = "${JOB_NAME}-${BUILD_NUMBER}"
    }

    stages {
        stage('Setup') {
            steps {
                echo 'Instalando dependencias...'
                bat 'npm install'
            }
        }

        stage('Run Tests on BrowserStack') {
            steps {
                echo 'Ejecutando pruebas en BrowserStack...'
                browserstack(credentialsId: '3dede4c9-83bb-4d53-98f2-0cdea291fb59') {
                    bat 'npm run testBSJenkins:guest-user'
                }
            }
        }
    }

    post {
        always {
            echo 'Publicando reportes de BrowserStack...'
            browserStackReportPublisher 'automate'
        }

        success {
            echo 'Build finalizado exitosamente.'
        }

        failure {
            echo 'El build falló. Verifica los logs y artefactos.'
        }
    }
}
