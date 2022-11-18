# Instructions

- create 3 deployments (`v1`, `v2` & `v3` dumpster version) and 3 services for deployments

```
kubectl run dv1 --image gutek/dumpster:v1 --restart Always
kubectl run dv2 --image gutek/dumpster:v2 --restart Always
kubectl run dv3 --image gutek/dumpster:v3 --restart Always

kubectl expose deploy dv1 --type NodePort --port 80 --targetPort 8080 --name v1-svc
kubectl expose deploy dv2 --type NodePort --port 80 --targetPort 8080 --name v2-svc
kubectl expose deploy dv3 --type NodePort --port 80 --targetPort 8080 --name v3-svc
```

- create ingress that will map paths based on deployment name
- use ingress base file: `ingress.yaml`
- validate that you can open pages for each of 3 deployments