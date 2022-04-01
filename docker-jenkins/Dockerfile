FROM jenkins/jenkins:lts
USER root
RUN mkdir -p /tmp/download && \
curl -L https://download.docker.com/linux/static/stable/x86_64/docker-18.03.1-ce.tgz | tar -xz -C /tmp/download && \
rm -rf /tmp/download/docker/dockerd && \
mv /tmp/download/docker/docker* /usr/local/bin/ && \
rm -rf /tmp/download && \
groupadd -g 999 docker && \
usermod -aG staff,docker jenkins
USER jenkins
#docker build -t jenkins-docker . 
#docker run --name jenkins -p 8080:8080 -p 50000:50000 \ -v /var/jenkins_home:/var/jenkins_home \ -v /var/run/docker.sock:/var/run/docker.sock -d jenkins-docker