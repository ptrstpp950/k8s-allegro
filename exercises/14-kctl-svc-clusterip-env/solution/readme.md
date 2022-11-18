# Solution

```bash
kubectl delete po,svc --all
kubectl delete po,svc,deploy,pvc,pv,cm,secret,rs -l workshop

kubectl apply -f pod.yaml
kubectl apply -f service.yaml
kubectl port-forward svc/dumpster-svc 8889:80
```

results of http://localhost:8889/env

```html
PATH: /usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
HOSTNAME: dumpster-pod
KUBERNETES_PORT_443_TCP_PORT: 443
KUBERNETES_PORT_443_TCP_ADDR: 10.96.0.1
KUBERNETES_SERVICE_HOST: 10.96.0.1
KUBERNETES_SERVICE_PORT: 443
KUBERNETES_SERVICE_PORT_HTTPS: 443
KUBERNETES_PORT: tcp://10.96.0.1:443
KUBERNETES_PORT_443_TCP: tcp://10.96.0.1:443
KUBERNETES_PORT_443_TCP_PROTO: tcp
NODE_VERSION: 11.10.1
YARN_VERSION: 1.13.0
HOME: /root
```

```
kubectl delete pod,svc -l workshop
kubectl apply -f service.yaml
kubectl apply -f pod.yaml
kubectl port-forward svc/dumpster-svc 8889:80
```

results of http://localhost:8889/env

```html
PATH: /usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
HOSTNAME: dumpster-pod
KUBERNETES_PORT_443_TCP: tcp://10.96.0.1:443
KUBERNETES_PORT_443_TCP_PROTO: tcp
KUBERNETES_PORT_443_TCP_ADDR: 10.96.0.1
DUMPSTER_SVC_SERVICE_PORT: 80
DUMPSTER_SVC_PORT_80_TCP_PROTO: tcp
KUBERNETES_SERVICE_HOST: 10.96.0.1
KUBERNETES_SERVICE_PORT: 443
KUBERNETES_SERVICE_PORT_HTTPS: 443
DUMPSTER_SVC_PORT: tcp://10.96.24.236:80
DUMPSTER_SVC_PORT_80_TCP_PORT: 80
DUMPSTER_SVC_PORT_80_TCP_ADDR: 10.96.24.236
KUBERNETES_PORT: tcp://10.96.0.1:443
DUMPSTER_SVC_SERVICE_HOST: 10.96.24.236
DUMPSTER_SVC_SERVICE_PORT_HTTP: 80
DUMPSTER_SVC_PORT_80_TCP: tcp://10.96.24.236:80
KUBERNETES_PORT_443_TCP_PORT: 443
NODE_VERSION: 11.10.1
YARN_VERSION: 1.13.0
HOME: /root
```