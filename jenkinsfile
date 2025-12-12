pipeline {
    agent any                      // Will be improved in step 6.5

    stages {
        stage('Checkout') {
            steps {
                echo 'Pulling code from Git...'
                // This line is enough when the job is triggered by GitLab/GitHub webhook
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing Node.js packages...'
                sh 'npm ci'                     // clean install = fast & reproducible
            }
        }

        stage('Run Playwright Tests') {
            steps {
                echo 'Starting Playwright tests...'
                sh 'npx playwright test'
            }
        }
    }

    post {
        always {
            // Publish nice HTML report inside Jenkins
            publishHTML target: [
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report'
            ]

            // Optional: archive videos/traces on failure
            archiveArtifacts artifacts: 'test-results/**/*', allowEmptyArchive: true
        }
    }
}