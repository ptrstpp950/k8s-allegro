# Instructions

- Choose one preferred option (_ssh_, _minikube_, _docker_)
- Connect using _ssh_ if first option had been selected
- _minikube_
  - on ubuntu run: `minikube start --memory 8192`
  - locally run: `minikube start`
  - run: `minikube status` - `host`, `kubelet` and `api` should be running
- _docker_
  - Check in docker UI if kubernetes is running