# Solution

- `kubectl apply -f pod.yaml`
- change `...` to `ClusterIP`
- `kubectl get svc dumpster-svc` and take a look at `Cluster-IP` column
- alternatively: `kubectl describe svc dumpster-svc` and take a look at `IP`
- accessing: idea is that you do not know yet how to access it. but you might figure out from dashboard example that you can access it using special set of path. if you open dashboard, you can change few entries like `kube-system` and `kubernetes-dashboard` to the one that reflects yours service configuration. hint: part everything from `#!/` is strictly related to `kubernetes-dashboard`. So in this case url would be: `http://127.0.0.1:8001/api/v1/namespaces/default/services/http:dumpster-svc:80/proxy/` - where `8001` might be different in yours case.