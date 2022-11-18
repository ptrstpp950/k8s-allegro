# Solution

```bash
kubectl delete pod dumpster-pod
kubectl create -f pod.yaml
kubectl get dumpster-pod -o yaml > create-pod.yaml

kubectl delete pod dumpster-pod
kubectl apply -f pod.yaml
kubectl get dumpster-pod -o yaml > apply-pod.yaml
```

look at annotations