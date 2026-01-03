pipeline{
    agent any 
    stages{
        stage('Build'){
            steps{
                echo 'Building...'
                echo 'Build completed.'
            }
        }
        stage('Unit Test'){
            steps{
                echo 'Testing...'
            }
        }
        stage('Sonar Scan'){
            steps{
                echo 'Scanning...'
            }
        }
        stage('Upload Artifacts'){
            steps{
                echo 'Uploading artifacts...'
            }
        }
    }
}
