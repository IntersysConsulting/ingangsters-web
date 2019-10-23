*** Settings ***
Documentation  This file contains all the necessary steps to create another Web Testing Framework Skeleton.
Library  Dialogs
Library  OperatingSystem

*** Test Cases ***
Start Creating Framework Skeleton
    ${FrameWorkName} =  get value from user  Ingangsters Automation Project  default_value=Test  hidden=False
    ${DesiredFolderPath} =  get value from user  \\ingangsters-web\TestCases  default_value=Test  hidden=False
    create directory  ${DesiredFolderPath}
    create directory  ${DesiredFolderPath}/CustomLib
    create directory  ${DesiredFolderPath}/Resources
    create directory  ${DesiredFolderPath}/Results
    create directory  ${DesiredFolderPath}/Test Data
    create directory  ${DesiredFolderPath}/Tests
    create file  ${DesiredFolderPath}/Tests/${FrameWorkName}.Robot