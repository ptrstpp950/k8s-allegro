# Solution

```bash
kubectl create namespace k8s
#or
kubectl create -f namespace.yaml

kubectl create -f pod.yaml
kubectl get pods -n k8s
kubectl delete pods --all -n k8s
```