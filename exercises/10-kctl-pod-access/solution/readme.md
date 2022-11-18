# Solution

```bash
kubectl proxy

# http://localhost:8001/api/v1/namespaces/default/pods/dumpster-pod/
# http://localhost:8001/api/v1/namespaces/default/pods/dumpster-pod/proxy/

kubectl port-forward dumpster-pod 8889:8080

# http://localhost:8889

kubectl exec dumpster-pod curl http://localhost:8080
```