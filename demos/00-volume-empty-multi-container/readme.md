create pod:

```
kubectl create -f multi-container-pod.yaml
```

then execute

```
kubectl port-forward pod/dumpster-multi-volume 8888:8080
```

open browser under:
```
http://127.0.0.1:8888/data
```

we can also:
```
# access generator and ls folder
k exec dumpster-multi-volume -c generator-container -it /bin/sh

# do the same with provider
k exec dumpster-multi-volume -c dumpster-container -it bash
```
