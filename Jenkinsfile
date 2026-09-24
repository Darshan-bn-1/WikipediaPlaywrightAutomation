pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Install Browsers') {
            steps {
                bat 'npx playwright install chromium'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npx playwright test'
            }
        }
    }

    post {
        always {

            // Publish Playwright HTML Report
            publishHTML([
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report'
            ])

            // Archive Logs
            archiveArtifacts(
                artifacts: 'logs/**/*.log',
                fingerprint: true
            )

            // Archive Screenshots
            archiveArtifacts(
                artifacts: 'screenshots/**/*',
                fingerprint: true
            )
        }
    }
}