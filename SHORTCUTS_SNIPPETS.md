# Shortcuts and code snippets in case of need of reuse

### Vue-toastification toasting

```
import { useToast } from "vue-toastification";
import pkg from 'vue-toastification';
const {useToast} = pkg;
const toast = useToast();
toast.success("I'm a toast!");
```