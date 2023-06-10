class Sources {
    draw(data: { name: string; id: string }[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement | null;
        const sourcesContainer = document.querySelector('.sources');

        if (!sourceItemTemp || !sourcesContainer) {
            return;
        }

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment | null;

            if (!sourceClone) {
                return;
            }
            const itemName = sourceClone.querySelector('.source__item-name');
            const itemElement = sourceClone.querySelector('.source__item');
            if (itemName && itemElement) {
                itemName.textContent = item.name;
                itemElement.setAttribute('data-source-id', item.id);
                fragment.append(sourceClone);
            }
        });
        sourcesContainer.append(fragment);
    }
}

export default Sources;
