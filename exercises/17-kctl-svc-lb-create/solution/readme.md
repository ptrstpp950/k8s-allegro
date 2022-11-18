# Solution

```bash
kubectl delete po,svc -l workshop

kubectl apply -f service.yaml
kubectl apply -f pod.yaml
# wait until you will get Exernal IP
kubectl get svc dumpster-svc --watch=true

# if no external ip showed, notice somthing
# about LoadBalancer. You might compare this
# with NodePort

# if external IP showed, access by external ip
# if not, try accessing it as NodePort

# http://localhost:NODE_PORT
# or
# http://minikube_ip:NODE_PORT

```