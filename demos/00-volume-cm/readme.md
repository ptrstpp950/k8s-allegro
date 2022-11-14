create pod:

```
kubectl create -f cm-dir-pod.yaml
```

then execute

```
kubectl port-forward pod/dumpster-cm-volume 8888:8080
```

open browser under:
```
http://127.0.0.1:8888/data
```
