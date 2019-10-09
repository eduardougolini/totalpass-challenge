#!/usr/bin/env groovy

stage('Preparando ambiente') {
    node {
        checkout scm
        sh 'npm install'
    }
}

stage('Testes Jest') {
    node {
        sh 'npm run test'
    }
}