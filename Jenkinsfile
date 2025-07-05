pipeline {
    agent any

    environment {
        BROWSERSTACK_USERNAME = credentials('BROWSERSTACK_USERNAME')       // usa ID correcto
        BROWSERSTACK_ACCESS_KEY = credentials('BROWSERSTACK_ACCESS_KEY')   // usa ID correcto
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
            script {
                echo 'Publicando reportes de BrowserStack...'
                browserStackReportPublisher 'automate'

                echo 'Archivando artefactos si existen...'
                // El bloque archiveArtifacts debe ir dentro de node para que funcione
                node {
                    archiveArtifacts artifacts: '**/browserstack-artifacts/**', allowEmptyArchive: true
                }
            }
        }

        success {
            echo 'Build finalizado exitosamente.'
        }

        failure {
            echo 'El build falló. Verifica los logs y artefactos.'
        }
    }
}
