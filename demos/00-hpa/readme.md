A bit from kubernetes.io

Instruction to install metric server are at https://dev.to/docker/enable-kubernetes-metrics-server-on-docker-desktop-5434
```
kubectl apply -f components.yaml
kubectl apply -f https://k8s.io/examples/application/php-apache.yaml

```

```
kubectl autoscale deployment php-apache --cpu-percent=50 --min=1 --max=10
```

```
kubectl get hpa
```

CMD+D

```
kubectl run --rm -it load-generator --image=busybox /bin/sh
while true; do wget -q -O- http://php-apache.default.svc.cluster.local; done
```

On Left:
```
kubectl get hpa -w
```

Target should be above 50%. Wait 1-3 minutes

```
kubectl get deployment php-apache
```