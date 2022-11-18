# Instructions

- run image `gutek/dumpster:v1`

this might change in next release of k8s. maybe there will be a need to use --generator parameter.

`kubectl run my-pod --image gutek/dumpster:v1 --restart Always`

- describe deployment to get:
  - deployment name
  - container name

`kubectl describe deploy my-pod`

- update image to `gutek/dumpster:v2` (hint: use values from previous point)

`kubectl set image deploy my-pod containerName=gutek/dumpster:v2

- check pod image using `describe` command

```
kubectl get pods
kubectl describe pod my-pod-hash-gencode
```
