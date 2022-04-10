import { Pagination, ReadFilteredListAPI, ReadFilteredPageAPI, ReadListAPI, ReadPageAPI } from '@crudifyjs/api';
import { Ref } from '@vue/composition-api';
import { useFilteredListApi, useFilteredPageApi, useListApi, usePageApi } from 'vue-use-read-api';

export function useReadListApi<T>(readListApi: ReadListAPI<T>) {
    return useListApi(() => readListApi.readList());
}

export function useReadFilteredListApi<T, F>(
    readListApi: ReadFilteredListAPI<T, F>,
    filterRef: Ref<F | undefined>,
    debounceMs?: number,
) {
    return useFilteredListApi(
        (filter: F) => readListApi.readFilteredList(filter),
        filterRef,
        debounceMs,
    );
}

export function useReadPageApi<T>(
    readPageApi: ReadPageAPI<T>,
    debounceMs?: number,
) {
    return usePageApi(
        (pagination: Pagination) => readPageApi.readPage(pagination),
        debounceMs,
    );
}

export function useReadFilteredPageApi<T, F>(
    readPageApi: ReadFilteredPageAPI<T, F>,
    filterRef: Ref<F | undefined>,
    debounceMs?: number,
) {
    return useFilteredPageApi(
        (filter: F, pagination: Pagination) => readPageApi.readFilteredPage(filter, pagination),
        filterRef,
        debounceMs,
    );
}
