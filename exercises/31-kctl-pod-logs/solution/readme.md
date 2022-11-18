# Instructions

- create pod with image gutek/dumpser:v1
- deploy it

```
kubectl run dd-pod --image gutek/dumpster:v1 --restart Always
```

- execute / endpoint

```
kubectl expose deploy dd-pod --port 80 --targetPort 8080 --name dd-svc --type NodePort

# open node port
```

- check logs

```
kubectl logs deploy dd-pod
```