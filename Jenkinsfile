pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Install Chromium Browser') {
            steps {
                bat 'npx playwright install chromium'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test'
            }
        }
    }

    post {
        always {

            // Publish Playwright HTML Report
            publishHTML([
                allowMissing: true,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report'
            ])

            // Archive full Playwright report folder
            archiveArtifacts(
                artifacts: 'playwright-report/**/*',
                fingerprint: true
            )

            // Archive execution logs
            archiveArtifacts(
                artifacts: 'logs/**/*.log',
                fingerprint: true
            )

            // Archive screenshots
            archiveArtifacts(
                artifacts: 'screenshots/**/*',
                fingerprint: true
            )
        }
    }
}