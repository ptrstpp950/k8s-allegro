# Solution

```bash
kubectl exec dumpster-pod -- curl http://dumpster-svc
kubectl exec dumpster-pod -- ping dumpster-svc
```