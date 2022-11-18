# Solution

```bash
kubectl apply -f pod.yaml
kubectl get po dumpster-pod --show-labels

# filter by lables but do not show them
kubectl get po -l app,tier,workshop,version

# filter by lables but do show them
kubectl get po -L app,tier,workshop,version

kubectl delete po,svc,deplo,pvc,pv,cm,secret,rs -l workshop
```