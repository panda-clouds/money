pipeline {
  agent any
  tools {
    nodejs 'Node 8.13.0'
  }
  stages {
    stage('Test') {
      steps {
        sh 'npm install'
        sh 'npm test spec/*.spec.js'
      }
    }
    stage('Approve') {
      input {
        message "✅ All Unit tests passed! Run manual staging instructions now."
        ok "Approve & Deploy Build"
      }
      steps {
        sh 'echo "Deploying..."'
      }
    }
    stage('Deploy') {
      when {
        branch "master"
      }
      environment {
        NPM_CREDENTIALS = credentials('npm')
      }
      steps {
        sh 'echo "NOT READY- add deploying to npm" && exit 1'
      }
    }
  }
  post{
    always {
      deleteDir()
    }
  }
}