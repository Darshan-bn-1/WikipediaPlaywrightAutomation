pipeline {
    agent any

    parameters {
        choice(
            name: 'BROWSER',
            choices: ['chromium', 'firefox', 'webkit'],
            description: 'Select browser'
        )

        string(
            name: 'BASE_URL',
            defaultValue: 'https://en.wikipedia.org',
            description: 'Application URL'
        )
    }

    stages {

        stage('Run Tests') {
            steps {
                bat """
                set BROWSER=%BROWSER%
                set BASE_URL=%BASE_URL%
                npx playwright test
                """
            }
        }
    }
}