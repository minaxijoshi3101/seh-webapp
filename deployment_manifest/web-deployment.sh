#! /bin/bash

#stop the existing application npm process
pm2 stop seh-webapp

#unzip the new build package
tar -xzf seh-webapp.tgz -C /prodlib/SEH/deployments/seh-webapp

#Copy the build dir to the deployment location
cd /prodlib/SEH/deployments/seh-webapp/ && cp -a . /prodlib/SEH/webapps/seh-webapp/

#start the application npm process
cd /prodlib/SEH/webapps/seh-webapp/
pm2 start npm --name "seh-webapp" -- start