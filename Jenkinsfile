pipeline {
    agent any

    environment {
        BROWSERSTACK_USERNAME = credentials('browserstack-username')       // o usa el ID directamente
        BROWSERSTACK_ACCESS_KEY = credentials('browserstack-accesskey')
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
                    bat 'npm run testBS:guest-user'
                }
            }
        }
    }

    post {
        always {
            echo 'Publicando reportes de BrowserStack...'
            browserStackReportPublisher 'automate'

            echo 'Archivando artefactos si existen...'
            archiveArtifacts artifacts: '**/browserstack-artifacts/**', allowEmptyArchive: true
        }

        success {
            echo 'Build finalizado exitosamente.'
        }

        failure {
            echo 'El build falló. Verifica los logs y artefactos.'
        }
    }
}
