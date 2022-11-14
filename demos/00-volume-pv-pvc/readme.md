```
minikube ssh
mkdir /tmp/simplehtml
echo $(date) Hello > /tmp/simpehtml/index.html
```

On docker:
```
mkdir /tmp/simplehtml
echo $(date) Hello > /tmp/simpehtml/index.html
```

In minikube you might need to create storageClass - but you might not. on docker you need. if you need for minikube, set provisioner to `provisioner: k8s.io/minikube-hostpath`

```
kubectl apply -f sc.yaml
kubectl apply -f pv.yaml
kubectl apply -f pvc.yaml

kubectl apply -f pod.yaml
```


```
kubectl get pv simple-pv-volume
kubectl get pvc simple-pv-claim
kubectl get pod simple-pv-pod
kubectl port-forward simple-pv-pod 8888:80
```
