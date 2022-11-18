# Solution

```bash
kubectl delete po,svc --all

kubectl apply -f pod-one.yaml
kubectl describe svc dumpster > after-one.yaml

kubectl apply -f pod-two.yaml
kubectl describe svc dumpster > after-two.yaml
```