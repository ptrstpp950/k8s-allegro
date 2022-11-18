# Instructions

- use only kubectl
- run gutek/dumpster:v1 with 6 replicas

```
kubectl run dd --image gutek/dumpster:v1 --restart Always --replicas 6
```

- expose it as service

```
kubectl expose deploy dd --type NodePort --port 80 --targetPort 8080 --name dd-svc
```

- make sure you can access service

```
kubectl get svc dd-svc
# access it by nodeport
```

- change image to gutek/dumpster:v2

```
kubectl set image deploy dd containerName=gutek/dumpster:v2
```

- open browser and check deployed version

```
# open nodeport
```