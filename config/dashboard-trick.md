# Dashboard trick

Accessing dashboard is not always easy - we need to remember long url or to start `kubectl proxy`. Some tools like `minikube` helps a lot doing this for us behind the scene after we execute `minikube dashboard`.

There is also another issue, we can have secure and unsecured version of dashboard. One that ask as to log in, and respects our permissions and also operate over HTTPS, and one that gives us full access and do not ask about anything, what best of it, it runs on HTTP.

## Setting default editor

When using `kubectl` we might sometimes end up in `vim` or `notepad`. If we do not like them, and prefer different editors, we might change this behaviour by introducing `KUBE_EDITOR` environment variable i.e.:

```
export KUBE_EDITOR=code
```

should set code as default editor for all `kubectl`

## Secured version

We leaving this empty intentionally. Trick is the same, issue is with browsers that does not allow to access not secure HTTPS connections. To overcome this, we need a lot of small configuration steps that currently can only cause headache ;) 

## Unsecured version

We will do some magic, don't worry, you will learn about all of these during next to days. Now just follow the steps. Firstly we need to modify `kubernetes-dashboard` service type, so from internal service we will expose it externally. To do this, we will open service definition file in _default_ shell editor. Our goal is to change `type: ClusterIP` to `type: NodePort`. To edit definition execute:

```bash
kubectl edit service kubernetes-dashboard --namespace kube-system

# or

kubectl edit svc kubernetes-dashboard -n kube-system
```

On _mac_ if you have default _vim_ editor, press `i` and then you can modify proper line of code. Once done `esc` and `:wq`. Thats it. On _win_ this should be opened in _notepad_, if not, and we are in _vim_ we can follow _mac_ instructions.

Once we are done with editing, we can now execute:

```bash
kubectl get service kubernetes-dashboard --namespace kube-system

# or

kubectl get svc kubernetes-dashboard -n kube-system
```

This will return a list of items that match our criteria in this case _service_ of name `kubernetes-dashboard` under `kube-system` _namespace_. 

```bash
NAME                   TYPE       CLUSTER-IP      EXTERNAL-IP   PORT(S)        AGE
kubernetes-dashboard   NodePort   10.109.110.61   <none>        80:32288/TCP   4d
```

As we can see, our type is `NodePort` - this is what we've changed. What we are interested in however is column `PORT(S)`. Over here we have port binding saying _node port `32288` is bind to `80` on specific service_. So whenever we will access `NODE_IP:322888` it bind us to: `10.109.110.61:80` but we will have more discussion about this later.

This port `32288` is dynamic, so you can have different value there.

This port is a shortcut to our dashboard. Now instead of doing:

```bash
kubectl proxy
# open url: http://127.0.0.1:8001/api/v1/namespaces/kube-system/services/http:kubernetes-dashboard:/proxy/
```

we can on `docker` kubernetes open browser under:

```bash
http://127.0.0.1:32288/
```

On `minikube` kubernetes:

```bash
minikube ip

# open: http://RESULT_IP:32288
```

or by executing following command

```bash
minikube service kubernetes-dashboard -n kube-system --url
```
