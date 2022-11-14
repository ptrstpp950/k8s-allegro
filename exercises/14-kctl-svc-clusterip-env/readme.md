# Instructions

- clear all pods and services
- apply `pod.yaml`
- create `ClusterIP` service for `pod.yaml`, you can use `template.yaml` to help with structure
- execute `/env` endpoint of exposed pod (by doing this over `ClusterIP` or pod) - save result
- delete and create pod again (do not delete service)
- compare results of `/env` endpoint