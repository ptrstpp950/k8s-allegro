# Solution

```bash
kubectl delete po,svc -l workshop

kubectl apply -f deploy.yaml
kubectl get pods

kubectl get deploy dumpster-dep -o yaml
```

you can't access it, there is no service