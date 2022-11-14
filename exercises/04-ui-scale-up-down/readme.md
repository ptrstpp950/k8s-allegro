# Instructions

- scale up deployment
- check number of pods and their names
- access pod using service abstraction
- check hostname
- delete pod that was shown
- refresh your browser
- optional: Scale down

Might be helpful

```bash
# on mac/linux run this over service abstraction
# ie. run this before scale up and then look what
# happens when you do scale up
while true; do curl http://...; done

# on windows in PowerShell
while ($true) {curl http://... -UseBasicParsing}
```