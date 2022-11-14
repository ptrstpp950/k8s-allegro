# Intro

`Docker` kubernetes is almost clean, there are only few needed components and that's it. If we want something extra, we need to install it. With different kubernetes clusters this can be achieved in different ways. Some, like `minikube` provides more by default and also some special commend to add more. Others, just come with pre-packed with most common components. Some, needs to use `helm` (a package manager for kubernetes). But we are here in `docker` config and not other ones.

## Dashboard

### Secured version

Secured version allow us to control rights to access dashboard. This means that dashboard will be acting under our _permissions set_. If we can't create and object, dashboard will not allow us to do it. This is **recommended** way of working with dashboard. However, it have some drawbacks. For instance we might not be able to expose it easily on HTTPS.

Nevertheless to install _dashboard_ component, we need to execute following command:

```
kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v1.10.1/src/deploy/recommended/kubernetes-dashboard.yaml
```

If we would try to access dashboard now:

```
kubectl proxy
# open url: http://localhost:8001/api/v1/namespaces/kube-system/services/https:kubernetes-dashboard:/proxy/
```

We will be asked to provide _token_, or _kubeconfig_. That's not that easy. To be able to provide token we need to execute:

```
kubectl create -f yamls/dashboard-admin-role-binding.yaml
```

and then, after our _role_ has been created:
```
kubectl -n kubernetes-dashboard get secret $(kubectl -n kubernetes-dashboard get sa/admin-user -o jsonpath="{.secrets[0].name}") -o go-template="{{.data.token | base64decode}}"
```

which will return at the _token_ that can be used to login into dashboard.

### Unsecured Version

Unsecured version gives full permission to everyone accessing dashboard. This is good for local dev, but not good anywhere else ;) However, good news is that, if you are using cloud like AWS, Google or Azure, you have simple access to secured version.

Unsecured version is _simple_ in installation, all we need to do is to install:

```
kubectl create -f https://raw.githubusercontent.com/kubernetes/dashboard/v1.10.1/src/deploy/alternative/kubernetes-dashboard.yaml
```

and then after opening `kubectl proxy` we can access one of the URL's below

```
http://localhost:8001/api/v1/namespaces/kube-system/services/http:kubernetes-dashboard:/proxy/
http://localhost:8001/api/v1/namespaces/kube-system/services/kubernetes-dashboard/proxy/
```

## Additional services

As `docker` version comes with absolutely nothing installed, to have some insights into our local _cluster_ we need to install few extra components.

### Deprecated

Current dashboard is a few version behind changes to kubernetes, one of these changes was removal of [heapster](https://github.com/kubernetes-retired/heapster) monitoring solution. However, as kubernetes is saying _do not use it_, until there will be no support in dashboard for new solution, to see resource utilization in dashboard we will need to use deprecated product.

To add it to our cluster, execute following lines of code:

```
kubectl create -f https://raw.githubusercontent.com/kubernetes/heapster/master/deploy/kube-config/influxdb/influxdb.yaml
kubectl create -f https://raw.githubusercontent.com/kubernetes/heapster/master/deploy/kube-config/influxdb/heapster.yaml
kubectl create -f https://raw.githubusercontent.com/kubernetes/heapster/master/deploy/kube-config/influxdb/grafana.yaml
```


```
kubectl delete -f https://raw.githubusercontent.com/kubernetes/heapster/master/deploy/kube-config/influxdb/influxdb.yaml
kubectl delete -f https://raw.githubusercontent.com/kubernetes/heapster/master/deploy/kube-config/influxdb/heapster.yaml
kubectl delete -f https://raw.githubusercontent.com/kubernetes/heapster/master/deploy/kube-config/influxdb/grafana.yaml
```

## New

To use resource utilization, we should use incubator project - metric-server.

To install it, execute command below in /config/docker folder context:

```
kubectl create -f yamls/metrics-server/deploy/1.8+/
```