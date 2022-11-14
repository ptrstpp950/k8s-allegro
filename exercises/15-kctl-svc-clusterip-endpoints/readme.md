# Instructions

- clear all pods and services and apply `pod-one.yaml`
- create `ClusterIP` service of name `dumpster`
- execute `kubectl describe svc dumpster` and save results
- apply `pod-two.yaml`
- execute `kubectl describe svc dumpster` and compare results with previous one
- what are endpoints?
- can you figure this out?