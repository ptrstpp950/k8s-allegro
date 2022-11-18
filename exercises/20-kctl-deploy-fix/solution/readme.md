# Solution

```bash
kubectl delete po,svc -l workshop

kubectl apply -f deploy.yaml --record=true
kubectl get pods
kubectl rollout status deploy/dumpster-dep
kubectl rollout history deploy/dumpster-dep

kubectl apply -f deploy.yaml --record=true
kubectl rollout history deploy/dumpster-dep
kubectl rollout status deploy/dumpster-dep

# something went wrong, we need to fix it, ctrl+c to exit
kubectl rollout history deploy/dumpster-dep --revision=X

# this will show what had changed
# fix deployment and execute again:

kubectl apply -f fix-new-deploy.yaml --record=true
```
