[![npm](https://img.shields.io/npm/v/@crudifyjs/vue-use-read-api?style=for-the-badge)](https://www.npmjs.com/package/@crudifyjs/vue-use-read-api)

# @crudifyjs/vue-use-read-api

> Wrapper around [vue-use-read-api](https://www.npmjs.com/package/vue-use-read-api) to use it
> with [@crudifyjs/api](https://www.npmjs.com/package/@crudifyjs/api).

## Install

```sh
npm install --save @crudifyjs/vue-use-read-api
```

or

```sh
yarn add @crudifyjs/vue-use-read-api
```

or

```sh
pnpm install @crudifyjs/vue-use-read-api
```

## Usage

### List API

```ts
import { defineComponent, PropType } from 'vue';
import { ReadListAPI } from '@crudifyjs/api';
import { useReadListApi } from '@crudifyjs/vue-use-read-api';

export default defineComponent({
    props: {
        readListApi: {
            type: Object as PropType<ReadListAPI<User>>,
            required: true,
        },
    },
    setup(props) {
        const {
            items,
            loading,
            error,
            update,
        } = useReadListApi(props.useReadListApi);

        return {
            items,
            loading,
            error,
            update,
        }
    }
})
```

### Filtered List API

```ts
import { defineComponent, ref } from 'vue';
import { ReadFilteredListAPI } from '@crudifyjs/api';
import { useReadFilteredListApi } from '@crudifyjs/vue-use-read-api';

export default defineComponent({
    props: {
        readFilteredListApi: {
            type: Object as PropType<ReadFilteredListAPI<User, string>>,
            required: true,
        },
    },
    setup() {
        const filter = ref<string | undefined>();

        const {
            items,
            loading,
            error,
            update,
        } = useReadFilteredListApi(props.readFilteredListApi, filter);

        return {
            items,
            loading,
            error,
            update,
        }
    }
})
```

### Page API

```ts
import { defineComponent } from 'vue';
import { ReadPageAPI } from '@crudifyjs/api';
import { useReadPageApi } from '@crudifyjs/vue-use-read-api';

export default defineComponent({
    props: {
        readPageApi: {
            type: Object as PropType<ReadPageAPI<User>>,
            required: true,
        },
    },
    setup() {
        const {
            items,
            page,
            loading,
            error,
            update,
        } = useReadPageApi(props.readPageApi);

        function next() {
            page.value++;
        }

        function prev() {
            page.value--;
        }

        return {
            items,
            loading,
            error,
            update,
            next,
            prev,
        }
    }
})
```

### Filtered Page API

```ts
import { defineComponent, ref } from 'vue';
import { ReadFilteredPageAPI } from '@crudifyjs/api';
import { useReadFilteredPageApi } from '@crudifyjs/vue-use-read-api';

export default defineComponent({
    props: {
        readFilteredPageApi: {
            type: Object as PropType<ReadFilteredPageAPI<User, string>>,
            required: true,
        },
    },
    setup() {
        const filter = ref<string | undefined>();

        const {
            items,
            page,
            loading,
            error,
            update,
        } = useReadFilteredPageApi(props.readFilteredPageApi, filter);

        function next() {
            page.value++;
        }

        function prev() {
            page.value--;
        }

        return {
            items,
            loading,
            error,
            update,
            next,
            prev,
        }
    }
})
```
