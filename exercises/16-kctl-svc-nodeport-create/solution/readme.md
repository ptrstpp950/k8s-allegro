# Solution

```bash
kubectl delete po,svc --all

kubectl apply -f service.yaml
kubectl apply -f pod.yaml
kubectl get svc dumpster-svc -o yaml

# notice nodePort added

# access app by
# http://localhost:THIS_PORT
# or
# http://minikube_ip:THIS_PORT

```