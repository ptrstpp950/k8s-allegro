# Demo

```bash
kubectl delete po,svc,deploy -l workshop

kubectl apply -f service.yaml

# get node port
kubectl get svc dumpster-svc

# back to our shell
# cmd+d and on right side:
while true; do curl http://localhost:node_port; sleep 2; done

# on left side:
kubectl apply -f deploy-v1.yaml

# notice side right
kubectl apply -f deploy-v2.yaml

# look and right side
```