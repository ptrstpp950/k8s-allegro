# Instructions

- create config map with two keys and values
- add reference to all keys and values to `pod-and-service.yaml` (hint: use `valueFrom.configMapKeyRef`)
- deploy config map using apply
- deploy `pod-and-service.yaml` using apply
- verify that env variables had been created by opening pod-cm-env service `/env` endpoint