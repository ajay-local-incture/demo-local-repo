const scanner = require('sonarqube-scanner')

scanner(
  {
    serverUrl: 'http://localhost:9000',
    token: 'sqp_03e5f27c1e6226f0a14b593b634163f53840462b',
    projectKey: 'react-demo',
    options: {
      'sonar.projectName': 'react-demo',
      'sonar.projectDescription': 'Here I can add a description of my project',
      'sonar.projectKey': 'react-demo',
      'sonar.projectVersion': '0.0.1',
      'sonar.exclusions': '',
      'sonar.sourceEncoding': 'UTF-8'
    }
  },
  () => process.exit()
)
