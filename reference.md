# Reference
## Admins
<details><summary><code>client.admins.<a href="/src/api/resources/admins/client/Client.ts">identify</a>() -> Intercom.AdminWithApp | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>


You can view the currently authorised admin along with the embedded app object (a "workspace" in legacy terminology).

> 🚧 Single Sign On
>
> If you are building a custom "Log in with Intercom" flow for your site, and you call the `/me` endpoint to identify the logged-in user, you should not accept any sign-ins from users with unverified email addresses as it poses a potential impersonation security risk.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admins.identify();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `AdminsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admins.<a href="/src/api/resources/admins/client/Client.ts">away</a>({ ...params }) -> Intercom.Admin | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can set an Admin as away for the Inbox.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admins.away({
    admin_id: 1,
    away_mode_enabled: true,
    away_mode_reassign: true,
    away_status_reason_id: 12345
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ConfigureAwayAdminRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admins.<a href="/src/api/resources/admins/client/Client.ts">listAllActivityLogs</a>({ ...params }) -> Intercom.ActivityLogList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can get a log of activities by all admins in an app.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admins.listAllActivityLogs({
    created_at_after: "1677253093",
    created_at_before: "1677861493"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ListAllActivityLogsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admins.<a href="/src/api/resources/admins/client/Client.ts">list</a>() -> Intercom.AdminList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of admins for a given workspace.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admins.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `AdminsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.admins.<a href="/src/api/resources/admins/client/Client.ts">find</a>({ ...params }) -> Intercom.Admin | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can retrieve the details of a single admin.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.admins.find({
    admin_id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.FindAdminRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## AI Content
<details><summary><code>client.aiContent.<a href="/src/api/resources/aiContent/client/Client.ts">listContentImportSources</a>() -> Intercom.ContentImportSourcesList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can retrieve a list of all content import sources for a workspace.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.aiContent.listContentImportSources();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `AiContentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.aiContent.<a href="/src/api/resources/aiContent/client/Client.ts">createContentImportSource</a>({ ...params }) -> Intercom.ContentImportSource</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a new content import source by sending a POST request to this endpoint.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.aiContent.createContentImportSource({
    url: "https://www.example.com"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.CreateContentImportSourceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AiContentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.aiContent.<a href="/src/api/resources/aiContent/client/Client.ts">getContentImportSource</a>({ ...params }) -> Intercom.ContentImportSource</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.aiContent.getContentImportSource({
    source_id: "source_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.GetContentImportSourceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AiContentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.aiContent.<a href="/src/api/resources/aiContent/client/Client.ts">updateContentImportSource</a>({ ...params }) -> Intercom.ContentImportSource</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can update an existing content import source.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.aiContent.updateContentImportSource({
    source_id: "source_id",
    sync_behavior: "api",
    url: "https://www.example.com"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.UpdateContentImportSourceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AiContentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.aiContent.<a href="/src/api/resources/aiContent/client/Client.ts">deleteContentImportSource</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can delete a content import source by making a DELETE request this endpoint. This will also delete all external pages that were imported from this source.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.aiContent.deleteContentImportSource({
    source_id: "source_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.DeleteContentImportSourceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AiContentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.aiContent.<a href="/src/api/resources/aiContent/client/Client.ts">listExternalPages</a>() -> Intercom.ExternalPagesList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can retrieve a list of all external pages for a workspace.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.aiContent.listExternalPages();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `AiContentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.aiContent.<a href="/src/api/resources/aiContent/client/Client.ts">createExternalPage</a>({ ...params }) -> Intercom.ExternalPage</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a new external page by sending a POST request to this endpoint. If an external page already exists with the specified source_id and external_id, it will be updated instead.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.aiContent.createExternalPage({
    title: "Test",
    html: "<html><body><h1>Test</h1></body></html>",
    url: "https://www.example.com",
    source_id: 44,
    external_id: "abc1234"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.CreateExternalPageRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AiContentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.aiContent.<a href="/src/api/resources/aiContent/client/Client.ts">getExternalPage</a>({ ...params }) -> Intercom.ExternalPage</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can retrieve an external page.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.aiContent.getExternalPage({
    page_id: "page_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.GetExternalPageRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AiContentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.aiContent.<a href="/src/api/resources/aiContent/client/Client.ts">updateExternalPage</a>({ ...params }) -> Intercom.ExternalPage</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can update an existing external page (if it was created via the API).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.aiContent.updateExternalPage({
    page_id: "page_id",
    title: "Test",
    html: "<html><body><h1>Test</h1></body></html>",
    url: "https://www.example.com",
    source_id: 47,
    external_id: "5678"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.UpdateExternalPageRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AiContentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.aiContent.<a href="/src/api/resources/aiContent/client/Client.ts">deleteExternalPage</a>({ ...params }) -> Intercom.ExternalPage</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Sending a DELETE request for an external page will remove it from the content library UI and from being used for AI answers.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.aiContent.deleteExternalPage({
    page_id: "page_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.DeleteExternalPageRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AiContentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Articles
<details><summary><code>client.articles.<a href="/src/api/resources/articles/client/Client.ts">list</a>({ ...params }) -> core.Page<Intercom.ArticleListItem, Intercom.ArticleList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all articles by making a GET request to `https://api.intercom.io/articles`.

> 📘 How are the articles sorted and ordered?
>
> Articles will be returned in descending order on the `updated_at` attribute. This means if you need to iterate through results then we'll show the most recently updated articles first.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.articles.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.articles.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ListArticlesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.articles.<a href="/src/api/resources/articles/client/Client.ts">create</a>({ ...params }) -> Intercom.Article</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a new article by making a POST request to `https://api.intercom.io/articles`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.articles.create({
    title: "Thanks for everything",
    description: "Description of the Article",
    body: "Body of the Article",
    author_id: 991267497,
    state: "published",
    parent_id: 145,
    parent_type: "collection",
    translated_content: {
        fr: {
            title: "Merci pour tout",
            description: "Description de l'article",
            body: "Corps de l'article",
            author_id: 991267497,
            state: "published"
        }
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.CreateArticleRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.articles.<a href="/src/api/resources/articles/client/Client.ts">find</a>({ ...params }) -> Intercom.Article</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single article by making a GET request to `https://api.intercom.io/articles/<id>`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.articles.find({
    article_id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.FindArticleRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.articles.<a href="/src/api/resources/articles/client/Client.ts">update</a>({ ...params }) -> Intercom.Article</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can update the details of a single article by making a PUT request to `https://api.intercom.io/articles/<id>`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.articles.update({
    article_id: 1,
    title: "Christmas is here!",
    body: "<p>New gifts in store for the jolly season</p>"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.UpdateArticleRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.articles.<a href="/src/api/resources/articles/client/Client.ts">delete</a>({ ...params }) -> Intercom.DeletedArticleObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can delete a single article by making a DELETE request to `https://api.intercom.io/articles/<id>`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.articles.delete({
    article_id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.DeleteArticleRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.articles.<a href="/src/api/resources/articles/client/Client.ts">search</a>({ ...params }) -> Intercom.ArticleSearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can search for articles by making a GET request to `https://api.intercom.io/articles/search`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.articles.search({
    phrase: "Getting started",
    state: "published",
    help_center_id: 1,
    highlight: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.SearchArticlesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Away Status Reasons
<details><summary><code>client.awayStatusReasons.<a href="/src/api/resources/awayStatusReasons/client/Client.ts">listAwayStatusReasons</a>() -> Intercom.AwayStatusReason[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of all away status reasons configured for the workspace, including deleted ones.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.awayStatusReasons.listAwayStatusReasons();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `AwayStatusReasonsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Export
<details><summary><code>client.export.<a href="/src/api/resources/export/client/Client.ts">enqueueANewReportingDataExportJob</a>({ ...params }) -> Intercom.PostExportReportingDataEnqueueResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.export.enqueueANewReportingDataExportJob({
    dataset_id: "conversation",
    attribute_ids: ["conversation_id", "conversation_started_at"],
    start_time: 1717490000,
    end_time: 1717510000
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.PostExportReportingDataEnqueueRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.export.<a href="/src/api/resources/export/client/Client.ts">listAvailableDatasetsAndAttributes</a>() -> Intercom.GetExportReportingDataGetDatasetsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.export.listAvailableDatasetsAndAttributes();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `ExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Data Export
<details><summary><code>client.dataExport.<a href="/src/api/resources/dataExport/client/Client.ts">exportReportingData</a>({ ...params }) -> Intercom.DataExportExportReportingDataResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.dataExport.exportReportingData({
    job_identifier: "job_identifier",
    app_id: "app_id",
    client_id: "client_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ExportReportingDataRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.dataExport.<a href="/src/api/resources/dataExport/client/Client.ts">downloadReportingDataExport</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Download the data from a completed reporting data export job.

> Octet header required
>
> You will have to specify the header Accept: `application/octet-stream` when hitting this endpoint.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.dataExport.downloadReportingDataExport({
    job_identifier: "job_identifier",
    app_id: "app_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.DownloadReportingDataExportRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.dataExport.<a href="/src/api/resources/dataExport/client/Client.ts">create</a>({ ...params }) -> Intercom.DataExport</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

To create your export job, you need to send a `POST` request to the export endpoint `https://api.intercom.io/export/content/data`.

The only parameters you need to provide are the range of dates that you want exported.

>🚧 Limit of one active job
>
> You can only have one active job per workspace. You will receive a HTTP status code of 429 with the message Exceeded rate limit of 1 pending message data export jobs if you attempt to create a second concurrent job.

>❗️ Updated_at not included
>
> It should be noted that the timeframe only includes messages sent during the time period and not messages that were only updated during this period. For example, if a message was updated yesterday but sent two days ago, you would need to set the created_at_after date before the message was sent to include that in your retrieval job.

>📘 Date ranges are inclusive
>
> Requesting data for 2018-06-01 until 2018-06-30 will get all data for those days including those specified - e.g. 2018-06-01 00:00:00 until 2018-06-30 23:59:99.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.dataExport.create({
    created_at_after: 1734519776,
    created_at_before: 1734537776
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.CreateDataExportRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.dataExport.<a href="/src/api/resources/dataExport/client/Client.ts">find</a>({ ...params }) -> Intercom.DataExport</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can view the status of your job by sending a `GET` request to the URL
`https://api.intercom.io/export/content/data/{job_identifier}` - the `{job_identifier}` is the value returned in the response when you first created the export job. More on it can be seen in the Export Job Model.

> 🚧 Jobs expire after two days
> All jobs that have completed processing (and are thus available to download from the provided URL) will have an expiry limit of two days from when the export ob completed. After this, the data will no longer be available.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.dataExport.find({
    job_identifier: "job_identifier"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.FindDataExportRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.dataExport.<a href="/src/api/resources/dataExport/client/Client.ts">cancel</a>({ ...params }) -> Intercom.DataExport</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can cancel your job
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.dataExport.cancel({
    job_identifier: "job_identifier"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.CancelDataExportRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.dataExport.<a href="/src/api/resources/dataExport/client/Client.ts">download</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

When a job has a status of complete, and thus a filled download_url, you can download your data by hitting that provided URL, formatted like so: https://api.intercom.io/download/content/data/xyz1234.

Your exported message data will be streamed continuously back down to you in a gzipped CSV format.

> 📘 Octet header required
>
> You will have to specify the header Accept: `application/octet-stream` when hitting this endpoint.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.dataExport.download({
    job_identifier: "job_identifier"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.DownloadDataExportRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## HelpCenters
<details><summary><code>client.helpCenters.<a href="/src/api/resources/helpCenters/client/Client.ts">find</a>({ ...params }) -> Intercom.HelpCenter</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single Help Center by making a GET request to `https://api.intercom.io/help_center/help_center/<id>`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.helpCenters.find({
    help_center_id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.FindHelpCenterRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `HelpCentersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.helpCenters.<a href="/src/api/resources/helpCenters/client/Client.ts">list</a>({ ...params }) -> core.Page<Intercom.HelpCenter, Intercom.HelpCenterList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can list all Help Centers by making a GET request to `https://api.intercom.io/help_center/help_centers`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.helpCenters.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.helpCenters.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ListHelpCentersRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `HelpCentersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Internal Articles
<details><summary><code>client.internalArticles.<a href="/src/api/resources/internalArticles/client/Client.ts">listInternalArticles</a>() -> Intercom.InternalArticleList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all internal articles by making a GET request to `https://api.intercom.io/internal_articles`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.internalArticles.listInternalArticles();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `InternalArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.internalArticles.<a href="/src/api/resources/internalArticles/client/Client.ts">createInternalArticle</a>({ ...params }) -> Intercom.InternalArticle</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a new internal article by making a POST request to `https://api.intercom.io/internal_articles`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.internalArticles.createInternalArticle({
    title: "Thanks for everything",
    body: "Body of the Article",
    author_id: 991266252,
    owner_id: 991266252
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.CreateInternalArticleRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InternalArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.internalArticles.<a href="/src/api/resources/internalArticles/client/Client.ts">retrieveInternalArticle</a>({ ...params }) -> Intercom.InternalArticle</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single internal article by making a GET request to `https://api.intercom.io/internal_articles/<id>`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.internalArticles.retrieveInternalArticle({
    internal_article_id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.RetrieveInternalArticleRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InternalArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.internalArticles.<a href="/src/api/resources/internalArticles/client/Client.ts">updateInternalArticle</a>({ ...params }) -> Intercom.InternalArticle</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can update the details of a single internal article by making a PUT request to `https://api.intercom.io/internal_articles/<id>`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.internalArticles.updateInternalArticle({
    internal_article_id: 1,
    title: "Christmas is here!",
    body: "<p>New gifts in store for the jolly season</p>"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.UpdateInternalArticleRequestBody` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InternalArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.internalArticles.<a href="/src/api/resources/internalArticles/client/Client.ts">deleteInternalArticle</a>({ ...params }) -> Intercom.DeletedInternalArticleObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can delete a single internal article by making a DELETE request to `https://api.intercom.io/internal_articles/<id>`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.internalArticles.deleteInternalArticle({
    internal_article_id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.DeleteInternalArticleRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InternalArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.internalArticles.<a href="/src/api/resources/internalArticles/client/Client.ts">searchInternalArticles</a>({ ...params }) -> Intercom.InternalArticleSearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can search for internal articles by making a GET request to `https://api.intercom.io/internal_articles/search`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.internalArticles.searchInternalArticles({
    folder_id: "folder_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.SearchInternalArticlesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InternalArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Companies
<details><summary><code>client.companies.<a href="/src/api/resources/companies/client/Client.ts">retrieve</a>({ ...params }) -> Intercom.CompaniesRetrieveResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a single company by passing in `company_id` or `name`.

  `https://api.intercom.io/companies?name={name}`

  `https://api.intercom.io/companies?company_id={company_id}`

You can fetch all companies and filter by `segment_id` or `tag_id` as a query parameter.

  `https://api.intercom.io/companies?tag_id={tag_id}`

  `https://api.intercom.io/companies?segment_id={segment_id}`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.companies.retrieve({
    name: "my company",
    company_id: "12345",
    tag_id: "678910",
    segment_id: "98765",
    page: 1,
    per_page: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.RetrieveCompanyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.companies.<a href="/src/api/resources/companies/client/Client.ts">createOrUpdate</a>({ ...params }) -> Intercom.Company</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create or update a company.

Companies will be only visible in Intercom when there is at least one associated user.

Companies are looked up via `company_id` in a `POST` request, if not found via `company_id`, the new company will be created, if found, that company will be updated.

{% admonition type="warning" name="Using `company_id`" %}
  You can set a unique `company_id` value when creating a company. However, it is not possible to update `company_id`. Be sure to set a unique value once upon creation of the company.
{% /admonition %}
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.companies.createOrUpdate({
    name: "my company",
    company_id: "company_remote_id",
    remote_created_at: 1374138000
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.CreateOrUpdateCompanyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.companies.<a href="/src/api/resources/companies/client/Client.ts">find</a>({ ...params }) -> Intercom.Company</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a single company.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.companies.find({
    company_id: "5f4d3c1c-7b1b-4d7d-a97e-6095715c6632"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.FindCompanyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.companies.<a href="/src/api/resources/companies/client/Client.ts">update</a>({ ...params }) -> Intercom.Company</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can update a single company using the Intercom provisioned `id`.

{% admonition type="warning" name="Using `company_id`" %}
  When updating a company it is not possible to update `company_id`. This can only be set once upon creation of the company.
{% /admonition %}
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.companies.update({
    company_id: "5f4d3c1c-7b1b-4d7d-a97e-6095715c6632",
    body: {
        name: "my company",
        website: "http://www.mycompany.com/"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.UpdateCompanyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.companies.<a href="/src/api/resources/companies/client/Client.ts">delete</a>({ ...params }) -> Intercom.DeletedCompanyObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can delete a single company.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.companies.delete({
    company_id: "5f4d3c1c-7b1b-4d7d-a97e-6095715c6632"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.DeleteCompanyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.companies.<a href="/src/api/resources/companies/client/Client.ts">listAttachedContacts</a>({ ...params }) -> Intercom.CompanyAttachedContacts</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all contacts that belong to a company.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.companies.listAttachedContacts({
    company_id: "5f4d3c1c-7b1b-4d7d-a97e-6095715c6632"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ListAttachedContactsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.companies.<a href="/src/api/resources/companies/client/Client.ts">listAttachedSegments</a>({ ...params }) -> Intercom.CompanyAttachedSegments</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all segments that belong to a company.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.companies.listAttachedSegments({
    company_id: "5f4d3c1c-7b1b-4d7d-a97e-6095715c6632"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ListSegmentsAttachedToCompanyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.companies.<a href="/src/api/resources/companies/client/Client.ts">list</a>({ ...params }) -> core.Page<Intercom.Company, Intercom.CompanyList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can list companies. The company list is sorted by the `last_request_at` field and by default is ordered descending, most recently requested first.

Note that the API does not include companies who have no associated users in list responses.

When using the Companies endpoint and the pages object to iterate through the returned companies, there is a limit of 10,000 Companies that can be returned. If you need to list or iterate on more than 10,000 Companies, please use the [Scroll API](https://developers.intercom.com/reference#iterating-over-all-companies).
{% admonition type="warning" name="Pagination" %}
  You can use pagination to limit the number of results returned. The default is `20` results per page.
  See the [pagination section](https://developers.intercom.com/docs/build-an-integration/learn-more/rest-apis/pagination/#pagination-for-list-apis) for more details on how to use the `starting_after` param.
{% /admonition %}
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.companies.list({
    page: 1,
    per_page: 1,
    order: "desc"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.companies.list({
    page: 1,
    per_page: 1,
    order: "desc"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ListCompaniesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.companies.<a href="/src/api/resources/companies/client/Client.ts">scroll</a>({ ...params }) -> core.Page<Intercom.Company, Intercom.CompanyScroll | undefined></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

      The `list all companies` functionality does not work well for huge datasets, and can result in errors and performance problems when paging deeply. The Scroll API provides an efficient mechanism for iterating over all companies in a dataset.

- Each app can only have 1 scroll open at a time. You'll get an error message if you try to have more than one open per app.
- If the scroll isn't used for 1 minute, it expires and calls with that scroll param will fail
- If the end of the scroll is reached, "companies" will be empty and the scroll parameter will expire

{% admonition type="info" name="Scroll Parameter" %}
  You can get the first page of companies by simply sending a GET request to the scroll endpoint.
  For subsequent requests you will need to use the scroll parameter from the response.
{% /admonition %}
{% admonition type="danger" name="Scroll network timeouts" %}
  Since scroll is often used on large datasets network errors such as timeouts can be encountered. When this occurs you will see a HTTP 500 error with the following message:
  "Request failed due to an internal network error. Please restart the scroll operation."
  If this happens, you will need to restart your scroll query: It is not possible to continue from a specific point when using scroll.
{% /admonition %}
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.companies.scroll({
    scroll_param: "scroll_param"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.companies.scroll({
    scroll_param: "scroll_param"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ScrollCompaniesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.companies.<a href="/src/api/resources/companies/client/Client.ts">attachContact</a>({ ...params }) -> Intercom.Company</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can attach a company to a single contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.companies.attachContact({
    contact_id: "contact_id",
    id: "6762f09a1bb69f9f2193bb34"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.AttachContactToCompanyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.companies.<a href="/src/api/resources/companies/client/Client.ts">detachContact</a>({ ...params }) -> Intercom.Company</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can detach a company from a single contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.companies.detachContact({
    contact_id: "58a430d35458202d41b1e65b",
    company_id: "58a430d35458202d41b1e65b"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.DetachContactFromCompanyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Contacts
<details><summary><code>client.contacts.<a href="/src/api/resources/contacts/client/Client.ts">listAttachedCompanies</a>({ ...params }) -> core.Page<Intercom.Company, Intercom.ContactAttachedCompanies></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of companies that are associated to a contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.contacts.listAttachedCompanies({
    contact_id: "63a07ddf05a32042dffac965",
    page: 1,
    per_page: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.contacts.listAttachedCompanies({
    contact_id: "63a07ddf05a32042dffac965",
    page: 1,
    per_page: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ListAttachedCompaniesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.contacts.<a href="/src/api/resources/contacts/client/Client.ts">listAttachedSegments</a>({ ...params }) -> Intercom.ContactSegments</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of segments that are associated to a contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contacts.listAttachedSegments({
    contact_id: "63a07ddf05a32042dffac965"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ListSegmentsAttachedToContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.contacts.<a href="/src/api/resources/contacts/client/Client.ts">listAttachedSubscriptions</a>({ ...params }) -> Intercom.SubscriptionTypeList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of subscription types that are attached to a contact. These can be subscriptions that a user has 'opted-in' to or has 'opted-out' from, depending on the subscription type.
This will return a list of Subscription Type objects that the contact is associated with.

The data property will show a combined list of:

  1.Opt-out subscription types that the user has opted-out from.
  2.Opt-in subscription types that the user has opted-in to receiving.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contacts.listAttachedSubscriptions({
    contact_id: "63a07ddf05a32042dffac965"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ListAttachedSubscriptionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.contacts.<a href="/src/api/resources/contacts/client/Client.ts">attachSubscription</a>({ ...params }) -> Intercom.SubscriptionType</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can add a specific subscription to a contact. In Intercom, we have two different subscription types based on user consent - opt-out and opt-in:

  1.Attaching a contact to an opt-out subscription type will opt that user out from receiving messages related to that subscription type.

  2.Attaching a contact to an opt-in subscription type will opt that user in to receiving messages related to that subscription type.

This will return a subscription type model for the subscription type that was added to the contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contacts.attachSubscription({
    contact_id: "63a07ddf05a32042dffac965",
    id: "37846",
    consent_type: "opt_in"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.AttachSubscriptionToContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.contacts.<a href="/src/api/resources/contacts/client/Client.ts">detachSubscription</a>({ ...params }) -> Intercom.SubscriptionType</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can remove a specific subscription from a contact. This will return a subscription type model for the subscription type that was removed from the contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contacts.detachSubscription({
    contact_id: "63a07ddf05a32042dffac965",
    subscription_id: "37846"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.DetachSubscriptionFromContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.contacts.<a href="/src/api/resources/contacts/client/Client.ts">listAttachedTags</a>({ ...params }) -> Intercom.TagList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all tags that are attached to a specific contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contacts.listAttachedTags({
    contact_id: "63a07ddf05a32042dffac965"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ListTagsAttachedToContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.contacts.<a href="/src/api/resources/contacts/client/Client.ts">find</a>({ ...params }) -> Intercom.ContactsFindResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contacts.find({
    contact_id: "63a07ddf05a32042dffac965"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.FindContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.contacts.<a href="/src/api/resources/contacts/client/Client.ts">update</a>({ ...params }) -> Intercom.ContactsUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can update an existing contact (ie. user or lead).

{% admonition type="info" %}
  This endpoint handles both **contact updates** and **custom object associations**.

  See _`update a contact with an association to a custom object instance`_ in the request/response examples to see the custom object association format.
{% /admonition %}
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contacts.update({
    contact_id: "63a07ddf05a32042dffac965",
    email: "joebloggs@intercom.io",
    name: "joe bloggs"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.UpdateContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.contacts.<a href="/src/api/resources/contacts/client/Client.ts">delete</a>({ ...params }) -> Intercom.ContactDeleted</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can delete a single contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contacts.delete({
    contact_id: "contact_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.DeleteContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.contacts.<a href="/src/api/resources/contacts/client/Client.ts">mergeLeadInUser</a>({ ...params }) -> Intercom.ContactsMergeLeadInUserResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can merge a contact with a `role` of `lead` into a contact with a `role` of `user`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contacts.mergeLeadInUser({
    from: "6762f0d51bb69f9f2193bb7f",
    into: "6762f0d51bb69f9f2193bb80"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.MergeContactsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.contacts.<a href="/src/api/resources/contacts/client/Client.ts">search</a>({ ...params }) -> core.Page<Intercom.Contact, Intercom.ContactList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can search for multiple contacts by the value of their attributes in order to fetch exactly who you want.

To search for contacts, you need to send a `POST` request to `https://api.intercom.io/contacts/search`.

This will accept a query object in the body which will define your filters in order to search for contacts.

{% admonition type="warning" name="Optimizing search queries" %}
  Search queries can be complex, so optimizing them can help the performance of your search.
  Use the `AND` and `OR` operators to combine multiple filters to get the exact results you need and utilize
  pagination to limit the number of results returned. The default is `50` results per page.
  See the [pagination section](https://developers.intercom.com/docs/build-an-integration/learn-more/rest-apis/pagination/#example-search-conversations-request) for more details on how to use the `starting_after` param.
{% /admonition %}
### Contact Creation Delay

If a contact has recently been created, there is a possibility that it will not yet be available when searching. This means that it may not appear in the response. This delay can take a few minutes. If you need to be instantly notified it is recommended to use webhooks and iterate to see if they match your search filters.

### Nesting & Limitations

You can nest these filters in order to get even more granular insights that pinpoint exactly what you need. Example: (1 OR 2) AND (3 OR 4).
There are some limitations to the amount of multiple's there can be:
* There's a limit of max 2 nested filters
* There's a limit of max 15 filters for each AND or OR group

### Searching for Timestamp Fields

All timestamp fields (created_at, updated_at etc.) are indexed as Dates for Contact Search queries; Datetime queries are not currently supported. This means you can only query for timestamp fields by day - not hour, minute or second.
For example, if you search for all Contacts with a created_at value greater (>) than 1577869200 (the UNIX timestamp for January 1st, 2020 9:00 AM), that will be interpreted as 1577836800 (January 1st, 2020 12:00 AM). The search results will then include Contacts created from January 2nd, 2020 12:00 AM onwards.
If you'd like to get contacts created on January 1st, 2020 you should search with a created_at value equal (=) to 1577836800 (January 1st, 2020 12:00 AM).
This behaviour applies only to timestamps used in search queries. The search results will still contain the full UNIX timestamp and be sorted accordingly.

### Accepted Fields

Most key listed as part of the Contacts Model are searchable, whether writeable or not. The value you search for has to match the accepted type, otherwise the query will fail (ie. as `created_at` accepts a date, the `value` cannot be a string such as `"foorbar"`).

| Field                              | Type                           |
| ---------------------------------- | ------------------------------ |
| id                                 | String                         |
| role                               | String<br>Accepts user or lead |
| name                               | String                         |
| avatar                             | String                         |
| owner_id                           | Integer                        |
| email                              | String                         |
| email_domain                       | String                         |
| phone                              | String                         |
| external_id                        | String                         |
| created_at                         | Date (UNIX Timestamp)          |
| signed_up_at                       | Date (UNIX Timestamp)          |
| updated_at                         | Date (UNIX Timestamp)          |
| last_seen_at                       | Date (UNIX Timestamp)          |
| last_contacted_at                  | Date (UNIX Timestamp)          |
| last_replied_at                    | Date (UNIX Timestamp)          |
| last_email_opened_at               | Date (UNIX Timestamp)          |
| last_email_clicked_at              | Date (UNIX Timestamp)          |
| language_override                  | String                         |
| browser                            | String                         |
| browser_language                   | String                         |
| os                                 | String                         |
| location.country                   | String                         |
| location.region                    | String                         |
| location.city                      | String                         |
| unsubscribed_from_emails           | Boolean                        |
| marked_email_as_spam               | Boolean                        |
| has_hard_bounced                   | Boolean                        |
| ios_last_seen_at                   | Date (UNIX Timestamp)          |
| ios_app_version                    | String                         |
| ios_device                         | String                         |
| ios_app_device                     | String                         |
| ios_os_version                     | String                         |
| ios_app_name                       | String                         |
| ios_sdk_version                    | String                         |
| android_last_seen_at               | Date (UNIX Timestamp)          |
| android_app_version                | String                         |
| android_device                     | String                         |
| android_app_name                   | String                         |
| andoid_sdk_version                 | String                         |
| segment_id                         | String                         |
| tag_id                             | String                         |
| custom_attributes.{attribute_name} | String                         |

### Accepted Operators

{% admonition type="warning" name="Searching based on `created_at`" %}
  You cannot use the `<=` or `>=` operators to search by `created_at`.
{% /admonition %}

The table below shows the operators you can use to define how you want to search for the value.  The operator should be put in as a string (`"="`). The operator has to be compatible with the field's type (eg. you cannot search with `>` for a given string value as it's only compatible for integer's and dates).

| Operator | Valid Types                      | Description                                                      |
| :------- | :------------------------------- | :--------------------------------------------------------------- |
| =        | All                              | Equals                                                           |
| !=       | All                              | Doesn't Equal                                                    |
| IN       | All                              | In<br>Shortcut for `OR` queries<br>Values must be in Array       |
| NIN      | All                              | Not In<br>Shortcut for `OR !` queries<br>Values must be in Array |
| >        | Integer<br>Date (UNIX Timestamp) | Greater than                                                     |
| <       | Integer<br>Date (UNIX Timestamp) | Lower than                                                       |
| ~        | String                           | Contains                                                         |
| !~       | String                           | Doesn't Contain                                                  |
| ^        | String                           | Starts With                                                      |
| $        | String                           | Ends With                                                        |
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.contacts.search({
    query: {
        operator: "AND",
        value: [{
                field: "created_at",
                operator: ">",
                value: "1306054154"
            }]
    },
    pagination: {
        per_page: 5
    }
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.contacts.search({
    query: {
        operator: "AND",
        value: [{
                field: "created_at",
                operator: ">",
                value: "1306054154"
            }]
    },
    pagination: {
        per_page: 5
    }
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.SearchRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.contacts.<a href="/src/api/resources/contacts/client/Client.ts">list</a>({ ...params }) -> core.Page<Intercom.Contact, Intercom.ContactList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all contacts (ie. users or leads) in your workspace.
{% admonition type="warning" name="Pagination" %}
  You can use pagination to limit the number of results returned. The default is `50` results per page.
  See the [pagination section](https://developers.intercom.com/docs/build-an-integration/learn-more/rest-apis/pagination/#pagination-for-list-apis) for more details on how to use the `starting_after` param.
{% /admonition %}
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.contacts.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.contacts.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ListContactsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.contacts.<a href="/src/api/resources/contacts/client/Client.ts">create</a>({ ...params }) -> Intercom.ContactsCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a new contact (ie. user or lead).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contacts.create({
    email: "joebloggs@intercom.io"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.CreateContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.contacts.<a href="/src/api/resources/contacts/client/Client.ts">showContactByExternalId</a>({ ...params }) -> Intercom.ShowContactByExternalIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single contact by external ID. Note that this endpoint only supports users and not leads.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contacts.showContactByExternalId({
    external_id: "cdd29344-5e0c-4ef0-ac56-f9ba2979bc27"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ShowContactByExternalIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.contacts.<a href="/src/api/resources/contacts/client/Client.ts">archive</a>({ ...params }) -> Intercom.ContactArchived</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can archive a single contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contacts.archive({
    contact_id: "63a07ddf05a32042dffac965"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ArchiveContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.contacts.<a href="/src/api/resources/contacts/client/Client.ts">unarchive</a>({ ...params }) -> Intercom.ContactUnarchived</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can unarchive a single contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contacts.unarchive({
    contact_id: "63a07ddf05a32042dffac965"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.UnarchiveContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.contacts.<a href="/src/api/resources/contacts/client/Client.ts">blockContact</a>({ ...params }) -> Intercom.ContactBlocked</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Block a single contact.<br>**Note:** conversations of the contact will also be archived during the process.<br>More details in [FAQ How do I block Inbox spam?](https://www.intercom.com/help/en/articles/8838656-inbox-faqs)
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contacts.blockContact({
    contact_id: "63a07ddf05a32042dffac965"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.BlockContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Notes
<details><summary><code>client.notes.<a href="/src/api/resources/notes/client/Client.ts">list</a>({ ...params }) -> core.Page<Intercom.Note, Intercom.NoteList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of notes that are associated to a contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.notes.list({
    contact_id: "contact_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.notes.list({
    contact_id: "contact_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ListContactNotesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NotesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.notes.<a href="/src/api/resources/notes/client/Client.ts">create</a>({ ...params }) -> Intercom.Note</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can add a note to a single contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.notes.create({
    contact_id: "123",
    body: "Hello",
    admin_id: "123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.CreateContactNoteRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NotesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.notes.<a href="/src/api/resources/notes/client/Client.ts">find</a>({ ...params }) -> Intercom.Note</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single note.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.notes.find({
    note_id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.FindNoteRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NotesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Tags
<details><summary><code>client.tags.<a href="/src/api/resources/tags/client/Client.ts">tagContact</a>({ ...params }) -> Intercom.Tag</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can tag a specific contact. This will return a tag object for the tag that was added to the contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tags.tagContact({
    contact_id: "63a07ddf05a32042dffac965",
    id: "7522907"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.TagContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tags.<a href="/src/api/resources/tags/client/Client.ts">untagContact</a>({ ...params }) -> Intercom.Tag</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can remove tag from a specific contact. This will return a tag object for the tag that was removed from the contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tags.untagContact({
    contact_id: "63a07ddf05a32042dffac965",
    tag_id: "7522907"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.UntagContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tags.<a href="/src/api/resources/tags/client/Client.ts">tagConversation</a>({ ...params }) -> Intercom.Tag</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can tag a specific conversation. This will return a tag object for the tag that was added to the conversation.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tags.tagConversation({
    conversation_id: "64619700005694",
    id: "7522907",
    admin_id: "780"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.TagConversationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tags.<a href="/src/api/resources/tags/client/Client.ts">untagConversation</a>({ ...params }) -> Intercom.Tag</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can remove tag from a specific conversation. This will return a tag object for the tag that was removed from the conversation.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tags.untagConversation({
    conversation_id: "64619700005694",
    tag_id: "7522907",
    admin_id: "123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.UntagConversationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tags.<a href="/src/api/resources/tags/client/Client.ts">list</a>() -> Intercom.TagList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all tags for a given workspace.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tags.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tags.<a href="/src/api/resources/tags/client/Client.ts">create</a>({ ...params }) -> Intercom.Tag</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can use this endpoint to perform the following operations:

  **1. Create a new tag:** You can create a new tag by passing in the tag name as specified in "Create or Update Tag Request Payload" described below.

  **2. Update an existing tag:** You can update an existing tag by passing the id of the tag as specified in "Create or Update Tag Request Payload" described below.

  **3. Tag Companies:** You can tag single company or a list of companies. You can tag a company by passing in the tag name and the company details as specified in "Tag Company Request Payload" described below. Also, if the tag doesn't exist then a new one will be created automatically.

  **4. Untag Companies:** You can untag a single company or a list of companies. You can untag a company by passing in the tag id and the company details as specified in "Untag Company Request Payload" described below.

  **5. Tag Multiple Users:** You can tag a list of users. You can tag the users by passing in the tag name and the user details as specified in "Tag Users Request Payload" described below.

Each operation will return a tag object.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tags.create({
    name: "test"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.TagsCreateRequestBody` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tags.<a href="/src/api/resources/tags/client/Client.ts">find</a>({ ...params }) -> Intercom.Tag</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of tags that are on the workspace by their id.
This will return a tag object.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tags.find({
    tag_id: "123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.FindTagRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tags.<a href="/src/api/resources/tags/client/Client.ts">delete</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can delete the details of tags that are on the workspace by passing in the id.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tags.delete({
    tag_id: "123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.DeleteTagRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tags.<a href="/src/api/resources/tags/client/Client.ts">tagTicket</a>({ ...params }) -> Intercom.Tag</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can tag a specific ticket. This will return a tag object for the tag that was added to the ticket.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tags.tagTicket({
    ticket_id: "64619700005694",
    id: "7522907",
    admin_id: "780"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.TagTicketRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tags.<a href="/src/api/resources/tags/client/Client.ts">untagTicket</a>({ ...params }) -> Intercom.Tag</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can remove tag from a specific ticket. This will return a tag object for the tag that was removed from the ticket.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tags.untagTicket({
    ticket_id: "64619700005694",
    tag_id: "7522907",
    admin_id: "123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.UntagTicketRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Conversations
<details><summary><code>client.conversations.<a href="/src/api/resources/conversations/client/Client.ts">list</a>({ ...params }) -> core.Page<Intercom.Conversation, Intercom.ConversationList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all conversations.

You can optionally request the result page size and the cursor to start after to fetch the result.
{% admonition type="warning" name="Pagination" %}
  You can use pagination to limit the number of results returned. The default is `20` results per page.
  See the [pagination section](https://developers.intercom.com/docs/build-an-integration/learn-more/rest-apis/pagination/#pagination-for-list-apis) for more details on how to use the `starting_after` param.
{% /admonition %}
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.conversations.list({
    per_page: 1,
    starting_after: "starting_after"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.conversations.list({
    per_page: 1,
    starting_after: "starting_after"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ListConversationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.conversations.<a href="/src/api/resources/conversations/client/Client.ts">create</a>({ ...params }) -> Intercom.Message</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a conversation that has been initiated by a contact (ie. user or lead).
The conversation can be an in-app message only.

{% admonition type="info" name="Sending for visitors" %}
You can also send a message from a visitor by specifying their `user_id` or `id` value in the `from` field, along with a `type` field value of `contact`.
This visitor will be automatically converted to a contact with a lead role once the conversation is created.
{% /admonition %}

This will return the Message model that has been created.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversations.create({
    from: {
        type: "user",
        id: "6762f11b1bb69f9f2193bba3"
    },
    body: "Hello there"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.CreateConversationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.conversations.<a href="/src/api/resources/conversations/client/Client.ts">find</a>({ ...params }) -> Intercom.Conversation</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>


You can fetch the details of a single conversation.

This will return a single Conversation model with all its conversation parts.

{% admonition type="warning" name="Hard limit of 500 parts" %}
The maximum number of conversation parts that can be returned via the API is 500. If you have more than that we will return the 500 most recent conversation parts.
{% /admonition %}

For AI agent conversation metadata, please note that you need to have the agent enabled in your workspace, which is a [paid feature](https://www.intercom.com/help/en/articles/8205718-fin-resolutions#h_97f8c2e671).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversations.find({
    conversation_id: "123",
    display_as: "plaintext",
    include_translations: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.FindConversationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.conversations.<a href="/src/api/resources/conversations/client/Client.ts">update</a>({ ...params }) -> Intercom.Conversation</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>


You can update an existing conversation.

{% admonition type="info" name="Replying and other actions" %}
If you want to reply to a coveration or take an action such as assign, unassign, open, close or snooze, take a look at the reply and manage endpoints.
{% /admonition %}

{% admonition type="info" %}
  This endpoint handles both **conversation updates** and **custom object associations**.

  See _`update a conversation with an association to a custom object instance`_ in the request/response examples to see the custom object association format.
{% /admonition %}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversations.update({
    conversation_id: "conversation_id",
    display_as: "plaintext",
    read: true,
    title: "new conversation title",
    custom_attributes: {
        "issue_type": "Billing",
        "priority": "High"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.UpdateConversationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.conversations.<a href="/src/api/resources/conversations/client/Client.ts">deleteConversation</a>({ ...params }) -> Intercom.ConversationDeleted</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can delete a single conversation.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversations.deleteConversation({
    conversation_id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.DeleteConversationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.conversations.<a href="/src/api/resources/conversations/client/Client.ts">search</a>({ ...params }) -> core.Page<Intercom.Conversation, Intercom.ConversationList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can search for multiple conversations by the value of their attributes in order to fetch exactly which ones you want.

To search for conversations, you need to send a `POST` request to `https://api.intercom.io/conversations/search`.

This will accept a query object in the body which will define your filters in order to search for conversations.
{% admonition type="warning" name="Optimizing search queries" %}
  Search queries can be complex, so optimizing them can help the performance of your search.
  Use the `AND` and `OR` operators to combine multiple filters to get the exact results you need and utilize
  pagination to limit the number of results returned. The default is `20` results per page and maximum is `150`.
  See the [pagination section](https://developers.intercom.com/docs/build-an-integration/learn-more/rest-apis/pagination/#example-search-conversations-request) for more details on how to use the `starting_after` param.
{% /admonition %}

### Nesting & Limitations

You can nest these filters in order to get even more granular insights that pinpoint exactly what you need. Example: (1 OR 2) AND (3 OR 4).
There are some limitations to the amount of multiple's there can be:
- There's a limit of max 2 nested filters
- There's a limit of max 15 filters for each AND or OR group

### Accepted Fields

Most keys listed in the conversation model are searchable, whether writeable or not. The value you search for has to match the accepted type, otherwise the query will fail (ie. as `created_at` accepts a date, the `value` cannot be a string such as `"foorbar"`).
The `source.body` field is unique as the search will not be performed against the entire value, but instead against every element of the value separately. For example, when searching for a conversation with a `"I need support"` body - the query should contain a `=` operator with the value `"support"` for such conversation to be returned. A query with a `=` operator and a `"need support"` value will not yield a result.

| Field                                     | Type                                                                                                                                                   |
| :---------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                                        | String                                                                                                                                                 |
| created_at                                | Date (UNIX timestamp)                                                                                                                                  |
| updated_at                                | Date (UNIX timestamp)                                                                                                                                  |
| source.type                               | String<br>Accepted fields are `conversation`, `email`, `facebook`, `instagram`, `phone_call`, `phone_switch`, `push`, `sms`, `twitter` and `whatsapp`. |
| source.id                                 | String                                                                                                                                                 |
| source.delivered_as                       | String                                                                                                                                                 |
| source.subject                            | String                                                                                                                                                 |
| source.body                               | String                                                                                                                                                 |
| source.author.id                          | String                                                                                                                                                 |
| source.author.type                        | String                                                                                                                                                 |
| source.author.name                        | String                                                                                                                                                 |
| source.author.email                       | String                                                                                                                                                 |
| source.url                                | String                                                                                                                                                 |
| contact_ids                               | String                                                                                                                                                 |
| teammate_ids                              | String                                                                                                                                                 |
| admin_assignee_id                         | String                                                                                                                                                 |
| team_assignee_id                          | String                                                                                                                                                 |
| channel_initiated                         | String                                                                                                                                                 |
| open                                      | Boolean                                                                                                                                                |
| read                                      | Boolean                                                                                                                                                |
| state                                     | String                                                                                                                                                 |
| waiting_since                             | Date (UNIX timestamp)                                                                                                                                  |
| snoozed_until                             | Date (UNIX timestamp)                                                                                                                                  |
| tag_ids                                   | String                                                                                                                                                 |
| priority                                  | String                                                                                                                                                 |
| statistics.time_to_assignment             | Integer                                                                                                                                                |
| statistics.time_to_admin_reply            | Integer                                                                                                                                                |
| statistics.time_to_first_close            | Integer                                                                                                                                                |
| statistics.time_to_last_close             | Integer                                                                                                                                                |
| statistics.median_time_to_reply           | Integer                                                                                                                                                |
| statistics.first_contact_reply_at         | Date (UNIX timestamp)                                                                                                                                  |
| statistics.first_assignment_at            | Date (UNIX timestamp)                                                                                                                                  |
| statistics.first_admin_reply_at           | Date (UNIX timestamp)                                                                                                                                  |
| statistics.first_close_at                 | Date (UNIX timestamp)                                                                                                                                  |
| statistics.last_assignment_at             | Date (UNIX timestamp)                                                                                                                                  |
| statistics.last_assignment_admin_reply_at | Date (UNIX timestamp)                                                                                                                                  |
| statistics.last_contact_reply_at          | Date (UNIX timestamp)                                                                                                                                  |
| statistics.last_admin_reply_at            | Date (UNIX timestamp)                                                                                                                                  |
| statistics.last_close_at                  | Date (UNIX timestamp)                                                                                                                                  |
| statistics.last_closed_by_id              | String                                                                                                                                                 |
| statistics.count_reopens                  | Integer                                                                                                                                                |
| statistics.count_assignments              | Integer                                                                                                                                                |
| statistics.count_conversation_parts       | Integer                                                                                                                                                |
| conversation_rating.requested_at          | Date (UNIX timestamp)                                                                                                                                  |
| conversation_rating.replied_at            | Date (UNIX timestamp)                                                                                                                                  |
| conversation_rating.score                 | Integer                                                                                                                                                |
| conversation_rating.remark                | String                                                                                                                                                 |
| conversation_rating.contact_id            | String                                                                                                                                                 |
| conversation_rating.admin_d               | String                                                                                                                                                 |
| ai_agent_participated                     | Boolean                                                                                                                                                |
| ai_agent.resolution_state                 | String                                                                                                                                                 |
| ai_agent.last_answer_type                 | String                                                                                                                                                 |
| ai_agent.rating                           | Integer                                                                                                                                                |
| ai_agent.rating_remark                    | String                                                                                                                                                 |
| ai_agent.source_type                      | String                                                                                                                                                 |
| ai_agent.source_title                     | String                                                                                                                                                 |

### Accepted Operators

The table below shows the operators you can use to define how you want to search for the value.  The operator should be put in as a string (`"="`). The operator has to be compatible with the field's type  (eg. you cannot search with `>` for a given string value as it's only compatible for integer's and dates).

| Operator | Valid Types                    | Description                                                  |
| :------- | :----------------------------- | :----------------------------------------------------------- |
| =        | All                            | Equals                                                       |
| !=       | All                            | Doesn't Equal                                                |
| IN       | All                            | In  Shortcut for `OR` queries  Values most be in Array       |
| NIN      | All                            | Not In  Shortcut for `OR !` queries  Values must be in Array |
| >        | Integer  Date (UNIX Timestamp) | Greater (or equal) than                                      |
| <       | Integer  Date (UNIX Timestamp) | Lower (or equal) than                                        |
| ~        | String                         | Contains                                                     |
| !~       | String                         | Doesn't Contain                                              |
| ^        | String                         | Starts With                                                  |
| $        | String                         | Ends With                                                    |
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.conversations.search({
    query: {
        operator: "AND",
        value: [{
                field: "created_at",
                operator: ">",
                value: "1306054154"
            }]
    },
    pagination: {
        per_page: 5
    }
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.conversations.search({
    query: {
        operator: "AND",
        value: [{
                field: "created_at",
                operator: ">",
                value: "1306054154"
            }]
    },
    pagination: {
        per_page: 5
    }
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.SearchRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.conversations.<a href="/src/api/resources/conversations/client/Client.ts">reply</a>({ ...params }) -> Intercom.Conversation</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can reply to a conversation with a message from an admin or on behalf of a contact, or with a note for admins.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversations.reply({
    conversation_id: "123 or \"last\"",
    body: {
        message_type: "comment",
        type: "user",
        body: "Thanks again :)",
        intercom_user_id: "6762f1571bb69f9f2193bbbb"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ReplyToConversationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.conversations.<a href="/src/api/resources/conversations/client/Client.ts">manage</a>({ ...params }) -> Intercom.Conversation</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

For managing conversations you can:
- Close a conversation
- Snooze a conversation to reopen on a future date
- Open a conversation which is `snoozed` or `closed`
- Assign a conversation to an admin and/or team.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversations.manage({
    conversation_id: "123",
    body: {
        message_type: "close",
        type: "admin",
        admin_id: "12345"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ManageConversationPartsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.conversations.<a href="/src/api/resources/conversations/client/Client.ts">attachContactAsAdmin</a>({ ...params }) -> Intercom.Conversation</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can add participants who are contacts to a conversation, on behalf of either another contact or an admin.

{% admonition type="warning" name="Contacts without an email" %}
If you add a contact via the email parameter and there is no user/lead found on that workspace with he given email, then we will create a new contact with `role` set to `lead`.
{% /admonition %}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversations.attachContactAsAdmin({
    conversation_id: "123",
    admin_id: "12345",
    customer: {
        intercom_user_id: "6762f19b1bb69f9f2193bbd4"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.AttachContactToConversationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.conversations.<a href="/src/api/resources/conversations/client/Client.ts">detachContactAsAdmin</a>({ ...params }) -> Intercom.Conversation</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can add participants who are contacts to a conversation, on behalf of either another contact or an admin.

{% admonition type="warning" name="Contacts without an email" %}
If you add a contact via the email parameter and there is no user/lead found on that workspace with he given email, then we will create a new contact with `role` set to `lead`.
{% /admonition %}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversations.detachContactAsAdmin({
    conversation_id: "123",
    contact_id: "123",
    admin_id: "5017690"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.DetachContactFromConversationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.conversations.<a href="/src/api/resources/conversations/client/Client.ts">redactConversationPart</a>({ ...params }) -> Intercom.Conversation</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can redact a conversation part or the source message of a conversation (as seen in the source object).

{% admonition type="info" name="Redacting parts and messages" %}
If you are redacting a conversation part, it must have a `body`. If you are redacting a source message, it must have been created by a contact. We will return a `conversation_part_not_redactable` error if these criteria are not met.
{% /admonition %}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversations.redactConversationPart({
    type: "conversation_part",
    conversation_id: "19894788788",
    conversation_part_id: "19381789428"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.RedactConversationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.conversations.<a href="/src/api/resources/conversations/client/Client.ts">convertToTicket</a>({ ...params }) -> Intercom.Ticket | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can convert a conversation to a ticket.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversations.convertToTicket({
    conversation_id: 1,
    ticket_type_id: "53"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ConvertConversationToTicketRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.conversations.<a href="/src/api/resources/conversations/client/Client.ts">runAssignmentRules</a>({ ...params }) -> Intercom.Conversation</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

{% admonition type="danger" name="Deprecation of Run Assignment Rules" %}
Run assignment rules is now deprecated in version 2.12 and future versions and will be permanently removed on December 31, 2026. After this date, any requests made to this endpoint will fail.
{% /admonition %}
You can let a conversation be automatically assigned following assignment rules.
{% admonition type="warning" name="When using workflows" %}
It is not possible to use this endpoint with Workflows.
{% /admonition %}
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversations.runAssignmentRules({
    conversation_id: "123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.AutoAssignConversationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Custom Channel Events
<details><summary><code>client.customChannelEvents.<a href="/src/api/resources/customChannelEvents/client/Client.ts">notifyNewConversation</a>({ ...params }) -> Intercom.CustomChannelNotificationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Notifies Intercom that a new conversation was created in your custom channel/platform. This triggers conversation creation and workflow automations within Intercom for your custom channel integration.
> **Note:** This endpoint is currently under managed availability. Please reach out to your accounts team to discuss access and tailored, hands-on support.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customChannelEvents.notifyNewConversation({
    event_id: "event_id",
    external_conversation_id: "external_conversation_id",
    contact: {
        type: "user",
        external_id: "external_id"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.CustomChannelBaseEvent` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomChannelEventsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.customChannelEvents.<a href="/src/api/resources/customChannelEvents/client/Client.ts">notifyNewMessage</a>({ ...params }) -> Intercom.CustomChannelNotificationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Notifies Intercom that a new message was sent in a conversation on your custom channel/platform. This allows Intercom to process the message and trigger any relevant workflow automations.
> **Note:** This endpoint is currently under managed availability. Please reach out to your accounts team to discuss access and tailored, hands-on support.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customChannelEvents.notifyNewMessage({
    body: "body",
    event_id: "event_id",
    external_conversation_id: "external_conversation_id",
    contact: {
        type: "user",
        external_id: "external_id"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.NotifyNewMessageRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomChannelEventsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.customChannelEvents.<a href="/src/api/resources/customChannelEvents/client/Client.ts">notifyQuickReplySelected</a>({ ...params }) -> Intercom.CustomChannelNotificationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Notifies Intercom that a user selected a quick reply option in your custom channel/platform. This allows Intercom to process the response and trigger any relevant workflow automations.
> **Note:** This endpoint is currently under managed availability. Please reach out to your accounts team to discuss access and tailored, hands-on support.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customChannelEvents.notifyQuickReplySelected({
    event_id: "evt_67890",
    external_conversation_id: "conv_13579",
    contact: {
        type: "user",
        external_id: "user_003",
        name: "Alice Example",
        email: "alice@example.com"
    },
    quick_reply_option_id: "1234"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.NotifyQuickReplySelectedRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomChannelEventsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.customChannelEvents.<a href="/src/api/resources/customChannelEvents/client/Client.ts">notifyAttributeCollected</a>({ ...params }) -> Intercom.CustomChannelNotificationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Notifies Intercom that a user provided a response to an attribute collector in your custom channel/platform. This allows Intercom to process the attribute and trigger any relevant workflow automations.
> **Note:** This endpoint is currently under managed availability. Please reach out to your accounts team to discuss access and tailored, hands-on support.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customChannelEvents.notifyAttributeCollected({
    attribute: {
        id: "id",
        value: "value"
    },
    event_id: "event_id",
    external_conversation_id: "external_conversation_id",
    contact: {
        type: "user",
        external_id: "external_id"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.NotifyAttributeCollectedRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomChannelEventsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Custom Object Instances
<details><summary><code>client.customObjectInstances.<a href="/src/api/resources/customObjectInstances/client/Client.ts">getCustomObjectInstancesByExternalId</a>({ ...params }) -> Intercom.CustomObjectInstance | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetch a Custom Object Instance by external_id.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customObjectInstances.getCustomObjectInstancesByExternalId({
    custom_object_type_identifier: "Order",
    external_id: "external_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.GetCustomObjectInstancesByExternalIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomObjectInstancesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.customObjectInstances.<a href="/src/api/resources/customObjectInstances/client/Client.ts">createCustomObjectInstances</a>({ ...params }) -> Intercom.CustomObjectInstance | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create or update a custom object instance
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customObjectInstances.createCustomObjectInstances({
    custom_object_type_identifier: "Order",
    external_id: "123",
    external_created_at: 1392036272,
    external_updated_at: 1392036272,
    custom_attributes: {
        "order_number": "ORDER-12345",
        "total_amount": "custom_attributes"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.CreateOrUpdateCustomObjectInstanceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomObjectInstancesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.customObjectInstances.<a href="/src/api/resources/customObjectInstances/client/Client.ts">deleteCustomObjectInstancesById</a>({ ...params }) -> Intercom.CustomObjectInstanceDeleted</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a single Custom Object instance by external_id.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customObjectInstances.deleteCustomObjectInstancesById({
    custom_object_type_identifier: "Order",
    external_id: "external_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.DeleteCustomObjectInstancesByIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomObjectInstancesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.customObjectInstances.<a href="/src/api/resources/customObjectInstances/client/Client.ts">getCustomObjectInstancesById</a>({ ...params }) -> Intercom.CustomObjectInstance | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetch a Custom Object Instance by id.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customObjectInstances.getCustomObjectInstancesById({
    custom_object_type_identifier: "Order",
    custom_object_instance_id: "custom_object_instance_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.GetCustomObjectInstancesByIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomObjectInstancesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.customObjectInstances.<a href="/src/api/resources/customObjectInstances/client/Client.ts">deleteCustomObjectInstancesByExternalId</a>({ ...params }) -> Intercom.CustomObjectInstanceDeleted</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a single Custom Object instance using the Intercom defined id.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customObjectInstances.deleteCustomObjectInstancesByExternalId({
    custom_object_type_identifier: "Order",
    custom_object_instance_id: "custom_object_instance_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.DeleteCustomObjectInstancesByExternalIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomObjectInstancesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Data Attributes
<details><summary><code>client.dataAttributes.<a href="/src/api/resources/dataAttributes/client/Client.ts">list</a>({ ...params }) -> Intercom.DataAttributeList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all data attributes belonging to a workspace for contacts, companies or conversations.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.dataAttributes.list({
    model: "contact",
    include_archived: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ListDataAttributesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataAttributesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.dataAttributes.<a href="/src/api/resources/dataAttributes/client/Client.ts">create</a>({ ...params }) -> Intercom.DataAttribute</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a data attributes for a `contact` or a `company`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.dataAttributes.create({
    data_type: "string"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.CreateDataAttributeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataAttributesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.dataAttributes.<a href="/src/api/resources/dataAttributes/client/Client.ts">update</a>({ ...params }) -> Intercom.DataAttribute</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>


You can update a data attribute.

> 🚧 Updating the data type is not possible
>
> It is currently a dangerous action to execute changing a data attribute's type via the API. You will need to update the type via the UI instead.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.dataAttributes.update({
    data_attribute_id: 1,
    body: {
        options: [{
                value: "1-10"
            }, {
                value: "11-20"
            }]
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.UpdateDataAttributeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataAttributesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Events
<details><summary><code>client.events.<a href="/src/api/resources/events/client/Client.ts">list</a>({ ...params }) -> Intercom.DataEventSummary</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>


> 🚧
>
> Please note that you can only 'list' events that are less than 90 days old. Event counts and summaries will still include your events older than 90 days but you cannot 'list' these events individually if they are older than 90 days

The events belonging to a customer can be listed by sending a GET request to `https://api.intercom.io/events` with a user or lead identifier along with a `type` parameter. The identifier parameter can be one of `user_id`, `email` or `intercom_user_id`. The `type` parameter value must be `user`.

- `https://api.intercom.io/events?type=user&user_id={user_id}`
- `https://api.intercom.io/events?type=user&email={email}`
- `https://api.intercom.io/events?type=user&intercom_user_id={id}` (this call can be used to list leads)

The `email` parameter value should be [url encoded](http://en.wikipedia.org/wiki/Percent-encoding) when sending.

You can optionally define the result page size as well with the `per_page` parameter.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.events.list({
    user_id: "user_id",
    intercom_user_id: "intercom_user_id",
    email: "email",
    type: "type",
    summary: true,
    per_page: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ListEventsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EventsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.events.<a href="/src/api/resources/events/client/Client.ts">create</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>


You will need an Access Token that has write permissions to send Events. Once you have a key you can submit events via POST to the Events resource, which is located at https://api.intercom.io/events, or you can send events using one of the client libraries. When working with the HTTP API directly a client should send the event with a `Content-Type` of `application/json`.

When using the JavaScript API, [adding the code to your app](http://docs.intercom.io/configuring-Intercom/tracking-user-events-in-your-app) makes the Events API available. Once added, you can submit an event using the `trackEvent` method. This will associate the event with the Lead or currently logged-in user or logged-out visitor/lead and send it to Intercom. The final parameter is a map that can be used to send optional metadata about the event.

With the Ruby client you pass a hash describing the event to `Intercom::Event.create`, or call the `track_user` method directly on the current user object (e.g. `user.track_event`).

**NB: For the JSON object types, please note that we do not currently support nested JSON structure.**

| Type            | Description                                                                                                                                                                                                     | Example                                                                           |
| :-------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------- |
| String          | The value is a JSON String                                                                                                                                                                                      | `"source":"desktop"`                                                              |
| Number          | The value is a JSON Number                                                                                                                                                                                      | `"load": 3.67`                                                                    |
| Date            | The key ends with the String `_date` and the value is a [Unix timestamp](http://en.wikipedia.org/wiki/Unix_time), assumed to be in the [UTC](http://en.wikipedia.org/wiki/Coordinated_Universal_Time) timezone. | `"contact_date": 1392036272`                                                      |
| Link            | The value is a HTTP or HTTPS URI.                                                                                                                                                                               | `"article": "https://example.org/ab1de.html"`                                     |
| Rich Link       | The value is a JSON object that contains `url` and `value` keys.                                                                                                                                                | `"article": {"url": "https://example.org/ab1de.html", "value":"the dude abides"}` |
| Monetary Amount | The value is a JSON object that contains `amount` and `currency` keys. The `amount` key is a positive integer representing the amount in cents. The price in the example to the right denotes €349.99.          | `"price": {"amount": 34999, "currency": "eur"}`                                   |

**Lead Events**

When submitting events for Leads, you will need to specify the Lead's `id`.

**Metadata behaviour**

- We currently limit the number of tracked metadata keys to 10 per event. Once the quota is reached, we ignore any further keys we receive. The first 10 metadata keys are determined by the order in which they are sent in with the event.
- It is not possible to change the metadata keys once the event has been sent. A new event will need to be created with the new keys and you can archive the old one.
- There might be up to 24 hrs delay when you send a new metadata for an existing event.

**Event de-duplication**

The API may detect and ignore duplicate events. Each event is uniquely identified as a combination of the following data - the Workspace identifier, the Contact external identifier, the Data Event name and the Data Event created time. As a result, it is **strongly recommended** to send a second granularity Unix timestamp in the `created_at` field.

Duplicated events are responded to using the normal `202 Accepted` code - an error is not thrown, however repeat requests will be counted against any rate limit that is in place.

### HTTP API Responses

- Successful responses to submitted events return `202 Accepted` with an empty body.
- Unauthorised access will be rejected with a `401 Unauthorized` or `403 Forbidden` response code.
- Events sent about users that cannot be found will return a `404 Not Found`.
- Event lists containing duplicate events will have those duplicates ignored.
- Server errors will return a `500` response code and may contain an error message in the body.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.events.create({
    id: "8a88a590-e1c3-41e2-a502-e0649dbf721c",
    event_name: "invited-friend",
    created_at: 1671028894
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.CreateDataEventRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EventsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.events.<a href="/src/api/resources/events/client/Client.ts">summaries</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create event summaries for a user. Event summaries are used to track the number of times an event has occurred, the first time it occurred and the last time it occurred.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.events.summaries();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ListEventSummariesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EventsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Jobs
<details><summary><code>client.jobs.<a href="/src/api/resources/jobs/client/Client.ts">status</a>({ ...params }) -> Intercom.Jobs</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve the status of job execution.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.jobs.status({
    job_id: "job_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.JobsStatusRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Messages
<details><summary><code>client.messages.<a href="/src/api/resources/messages/client/Client.ts">create</a>({ ...params }) -> Intercom.Message</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a message that has been initiated by an admin. The conversation can be either an in-app message or an email.

> 🚧 Sending for visitors
>
> There can be a short delay between when a contact is created and when a contact becomes available to be messaged through the API. A 404 Not Found error will be returned in this case.

This will return the Message model that has been created.

> 🚧 Retrieving Associated Conversations
>
> As this is a message, there will be no conversation present until the contact responds. Once they do, you will have to search for a contact's conversations with the id of the message.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.messages.create({
    message_type: "email",
    subject: "Thanks for everything",
    body: "Hello there",
    template: "plain",
    from: {
        type: "admin",
        id: 394051
    },
    to: {
        type: "user",
        id: "536e564f316c83104c000020"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.CreateMessageRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MessagesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Segments
<details><summary><code>client.segments.<a href="/src/api/resources/segments/client/Client.ts">list</a>({ ...params }) -> Intercom.SegmentList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all segments.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.segments.list({
    include_count: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ListSegmentsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SegmentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.segments.<a href="/src/api/resources/segments/client/Client.ts">find</a>({ ...params }) -> Intercom.Segment</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single segment.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.segments.find({
    segment_id: "123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.FindSegmentRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SegmentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Subscription Types
<details><summary><code>client.subscriptionTypes.<a href="/src/api/resources/subscriptionTypes/client/Client.ts">list</a>() -> Intercom.SubscriptionTypeList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can list all subscription types. A list of subscription type objects will be returned.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.subscriptionTypes.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `SubscriptionTypesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## PhoneCallRedirects
<details><summary><code>client.phoneCallRedirects.<a href="/src/api/resources/phoneCallRedirects/client/Client.ts">create</a>({ ...params }) -> Intercom.PhoneSwitch | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can use the API to deflect phone calls to the Intercom Messenger.
Calling this endpoint will send an SMS with a link to the Messenger to the phone number specified.

If custom attributes are specified, they will be added to the user or lead's custom data attributes.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.phoneCallRedirects.create({
    phone: "+353832345678",
    custom_attributes: {
        "issue_type": "Billing",
        "priority": "High"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.CreatePhoneSwitchRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PhoneCallRedirectsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Calls
<details><summary><code>client.calls.<a href="/src/api/resources/calls/client/Client.ts">listCalls</a>({ ...params }) -> Intercom.CallList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a paginated list of calls.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.calls.listCalls({
    page: 1,
    per_page: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ListCallsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CallsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.calls.<a href="/src/api/resources/calls/client/Client.ts">showCall</a>({ ...params }) -> Intercom.Call</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a single call by id.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.calls.showCall({
    call_id: "call_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ShowCallRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CallsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.calls.<a href="/src/api/resources/calls/client/Client.ts">showCallRecording</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Redirects to a signed URL for the call's recording if it exists.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.calls.showCallRecording({
    call_id: "call_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ShowCallRecordingRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CallsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.calls.<a href="/src/api/resources/calls/client/Client.ts">showCallTranscript</a>({ ...params }) -> string</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the transcript for the specified call as a downloadable text file.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.calls.showCallTranscript({
    call_id: "call_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ShowCallTranscriptRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CallsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.calls.<a href="/src/api/resources/calls/client/Client.ts">listCallsWithTranscripts</a>({ ...params }) -> Intercom.ListCallsWithTranscriptsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve calls by a list of conversation ids and include transcripts when available.
A maximum of 20 `conversation_ids` can be provided. If none are provided or more than 20 are provided, a 400 error is returned.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.calls.listCallsWithTranscripts({
    conversation_ids: ["64619700005694", "64619700005695"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ListCallsWithTranscriptsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CallsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Teams
<details><summary><code>client.teams.<a href="/src/api/resources/teams/client/Client.ts">list</a>() -> Intercom.TeamList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This will return a list of team objects for the App.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.teams.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `TeamsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.teams.<a href="/src/api/resources/teams/client/Client.ts">find</a>({ ...params }) -> Intercom.Team</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single team, containing an array of admins that belong to this team.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.teams.find({
    team_id: "123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.FindTeamRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TeamsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ticket States
<details><summary><code>client.ticketStates.<a href="/src/api/resources/ticketStates/client/Client.ts">listTicketStates</a>() -> Intercom.TicketStateList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can get a list of all ticket states for a workspace.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketStates.listTicketStates();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `TicketStatesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ticket Types
<details><summary><code>client.ticketTypes.<a href="/src/api/resources/ticketTypes/client/Client.ts">list</a>() -> Intercom.TicketTypeList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can get a list of all ticket types for a workspace.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketTypes.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `TicketTypesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ticketTypes.<a href="/src/api/resources/ticketTypes/client/Client.ts">create</a>({ ...params }) -> Intercom.TicketType | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a new ticket type.
> 📘 Creating ticket types.
>
> Every ticket type will be created with two default attributes: _default_title_ and _default_description_.
> For the `icon` propery, use an emoji from [Twemoji Cheatsheet](https://twemoji-cheatsheet.vercel.app/)
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketTypes.create({
    name: "Customer Issue",
    description: "Customer Report Template",
    category: "Customer",
    icon: "\uD83C\uDF9F\uFE0F"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.CreateTicketTypeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TicketTypesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ticketTypes.<a href="/src/api/resources/ticketTypes/client/Client.ts">get</a>({ ...params }) -> Intercom.TicketType | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single ticket type.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketTypes.get({
    ticket_type_id: "ticket_type_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.FindTicketTypeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TicketTypesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ticketTypes.<a href="/src/api/resources/ticketTypes/client/Client.ts">update</a>({ ...params }) -> Intercom.TicketType | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>


You can update a ticket type.

> 📘 Updating a ticket type.
>
> For the `icon` propery, use an emoji from [Twemoji Cheatsheet](https://twemoji-cheatsheet.vercel.app/)
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketTypes.update({
    ticket_type_id: "ticket_type_id",
    name: "Bug Report 2"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.UpdateTicketTypeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TicketTypesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Tickets
<details><summary><code>client.tickets.<a href="/src/api/resources/tickets/client/Client.ts">reply</a>({ ...params }) -> Intercom.TicketReply</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can reply to a ticket with a message from an admin or on behalf of a contact, or with a note for admins.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tickets.reply({
    ticket_id: "123",
    body: {
        message_type: "comment",
        type: "user",
        body: "Thanks again :)",
        intercom_user_id: "6762f2971bb69f9f2193bc49"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ReplyToTicketRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TicketsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tickets.<a href="/src/api/resources/tickets/client/Client.ts">create</a>({ ...params }) -> Intercom.Ticket | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a new ticket.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tickets.create({
    ticket_type_id: "1234",
    contacts: [{
            id: "6762f2d81bb69f9f2193bc54"
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.CreateTicketRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TicketsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tickets.<a href="/src/api/resources/tickets/client/Client.ts">enqueueCreateTicket</a>({ ...params }) -> Intercom.Jobs</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Enqueues ticket creation for asynchronous processing, returning if the job was enqueued successfully to be processed. We attempt to perform a best-effort validation on inputs before tasks are enqueued. If the given parameters are incorrect, we won't enqueue the job.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tickets.enqueueCreateTicket({
    ticket_type_id: "1234",
    contacts: [{
            id: "6762f2d81bb69f9f2193bc54"
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.EnqueueCreateTicketRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TicketsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tickets.<a href="/src/api/resources/tickets/client/Client.ts">get</a>({ ...params }) -> Intercom.Ticket | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single ticket.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tickets.get({
    ticket_id: "ticket_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.FindTicketRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TicketsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tickets.<a href="/src/api/resources/tickets/client/Client.ts">update</a>({ ...params }) -> Intercom.Ticket | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can update a ticket.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tickets.update({
    ticket_id: "ticket_id",
    ticket_attributes: {
        "_default_title_": "example",
        "_default_description_": "there is a problem"
    },
    ticket_state_id: "123",
    open: true,
    snoozed_until: 1673609604,
    admin_id: 991268011,
    assignee_id: "123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.UpdateTicketRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TicketsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tickets.<a href="/src/api/resources/tickets/client/Client.ts">deleteTicket</a>({ ...params }) -> Intercom.DeleteTicketResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can delete a ticket using the Intercom provided ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tickets.deleteTicket({
    ticket_id: "ticket_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.DeleteTicketRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TicketsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tickets.<a href="/src/api/resources/tickets/client/Client.ts">search</a>({ ...params }) -> core.Page<(Intercom.Ticket | undefined), Intercom.TicketList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can search for multiple tickets by the value of their attributes in order to fetch exactly which ones you want.

To search for tickets, you send a `POST` request to `https://api.intercom.io/tickets/search`.

This will accept a query object in the body which will define your filters.
{% admonition type="warning" name="Optimizing search queries" %}
  Search queries can be complex, so optimizing them can help the performance of your search.
  Use the `AND` and `OR` operators to combine multiple filters to get the exact results you need and utilize
  pagination to limit the number of results returned. The default is `20` results per page.
  See the [pagination section](https://developers.intercom.com/docs/build-an-integration/learn-more/rest-apis/pagination/#example-search-conversations-request) for more details on how to use the `starting_after` param.
{% /admonition %}

### Nesting & Limitations

You can nest these filters in order to get even more granular insights that pinpoint exactly what you need. Example: (1 OR 2) AND (3 OR 4).
There are some limitations to the amount of multiples there can be:
- There's a limit of max 2 nested filters
- There's a limit of max 15 filters for each AND or OR group

### Accepted Fields

Most keys listed as part of the Ticket model are searchable, whether writeable or not. The value you search for has to match the accepted type, otherwise the query will fail (ie. as `created_at` accepts a date, the `value` cannot be a string such as `"foobar"`).
The `source.body` field is unique as the search will not be performed against the entire value, but instead against every element of the value separately. For example, when searching for a conversation with a `"I need support"` body - the query should contain a `=` operator with the value `"support"` for such conversation to be returned. A query with a `=` operator and a `"need support"` value will not yield a result.

| Field                                     | Type                                                                                     |
| :---------------------------------------- | :--------------------------------------------------------------------------------------- |
| id                                        | String                                                                                   |
| created_at                                | Date (UNIX timestamp)                                                                    |
| updated_at                                | Date (UNIX timestamp)                                                                    |
| title                           | String                                                                                   |
| description                     | String                                                                                   |
| category                                  | String                                                                                   |
| ticket_type_id                            | String                                                                                   |
| contact_ids                               | String                                                                                   |
| teammate_ids                              | String                                                                                   |
| admin_assignee_id                         | String                                                                                   |
| team_assignee_id                          | String                                                                                   |
| open                                      | Boolean                                                                                  |
| state                                     | String                                                                                   |
| snoozed_until                             | Date (UNIX timestamp)                                                                    |
| ticket_attribute.{id}                     | String or Boolean or Date (UNIX timestamp) or Float or Integer                           |

{% admonition type="info" name="Searching by Category" %}
When searching for tickets by the **`category`** field, specific terms must be used instead of the category names:
* For **Customer** category tickets, use the term `request`.
* For **Back-office** category tickets, use the term `task`.
* For **Tracker** category tickets, use the term `tracker`.
{% /admonition %}

### Accepted Operators

{% admonition type="info" name="Searching based on `created_at`" %}
  You may use the `<=` or `>=` operators to search by `created_at`.
{% /admonition %}

The table below shows the operators you can use to define how you want to search for the value.  The operator should be put in as a string (`"="`). The operator has to be compatible with the field's type  (eg. you cannot search with `>` for a given string value as it's only compatible for integer's and dates).

| Operator | Valid Types                    | Description                                                  |
| :------- | :----------------------------- | :----------------------------------------------------------- |
| =        | All                            | Equals                                                       |
| !=       | All                            | Doesn't Equal                                                |
| IN       | All                            | In  Shortcut for `OR` queries  Values most be in Array       |
| NIN      | All                            | Not In  Shortcut for `OR !` queries  Values must be in Array |
| >        | Integer  Date (UNIX Timestamp) | Greater (or equal) than                                      |
| <       | Integer  Date (UNIX Timestamp) | Lower (or equal) than                                        |
| ~        | String                         | Contains                                                     |
| !~       | String                         | Doesn't Contain                                              |
| ^        | String                         | Starts With                                                  |
| $        | String                         | Ends With                                                    |
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.tickets.search({
    query: {
        operator: "AND",
        value: [{
                field: "created_at",
                operator: ">",
                value: "1306054154"
            }]
    },
    pagination: {
        per_page: 5
    }
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.tickets.search({
    query: {
        operator: "AND",
        value: [{
                field: "created_at",
                operator: ">",
                value: "1306054154"
            }]
    },
    pagination: {
        per_page: 5
    }
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.SearchRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TicketsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Visitors
<details><summary><code>client.visitors.<a href="/src/api/resources/visitors/client/Client.ts">find</a>({ ...params }) -> Intercom.Visitor | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single visitor.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.visitors.find({
    user_id: "user_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.FindVisitorRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VisitorsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.visitors.<a href="/src/api/resources/visitors/client/Client.ts">update</a>({ ...params }) -> Intercom.Visitor | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Sending a PUT request to `/visitors` will result in an update of an existing Visitor.

**Option 1.** You can update a visitor by passing in the `user_id` of the visitor in the Request body.

**Option 2.** You can update a visitor by passing in the `id` of the visitor in the Request body.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.visitors.update({
    id: "6762f30c1bb69f9f2193bc5e",
    name: "Gareth Bale"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.UpdateVisitorRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VisitorsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.visitors.<a href="/src/api/resources/visitors/client/Client.ts">mergeToContact</a>({ ...params }) -> Intercom.Contact</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can merge a Visitor to a Contact of role type `lead` or `user`.

> 📘 What happens upon a visitor being converted?
>
> If the User exists, then the Visitor will be merged into it, the Visitor deleted and the User returned. If the User does not exist, the Visitor will be converted to a User, with the User identifiers replacing it's Visitor identifiers.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.visitors.mergeToContact({
    type: "user",
    user: {
        id: "8a88a590-e1c3-41e2-a502-e0649dbf721c",
        email: "foo@bar.com"
    },
    visitor: {
        user_id: "3ecf64d0-9ed1-4e9f-88e1-da7d6e6782f3"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.MergeVisitorToContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VisitorsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## HelpCenters Collections
<details><summary><code>client.helpCenters.collections.<a href="/src/api/resources/helpCenters/resources/collections/client/Client.ts">list</a>({ ...params }) -> core.Page<Intercom.Collection, Intercom.CollectionList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all collections by making a GET request to `https://api.intercom.io/help_center/collections`.

Collections will be returned in descending order on the `updated_at` attribute. This means if you need to iterate through results then we'll show the most recently updated collections first.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.helpCenters.collections.list();
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.helpCenters.collections.list();
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.helpCenters.ListCollectionsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CollectionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.helpCenters.collections.<a href="/src/api/resources/helpCenters/resources/collections/client/Client.ts">create</a>({ ...params }) -> Intercom.Collection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a new collection by making a POST request to `https://api.intercom.io/help_center/collections.`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.helpCenters.collections.create({
    name: "Thanks for everything"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.helpCenters.CreateCollectionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CollectionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.helpCenters.collections.<a href="/src/api/resources/helpCenters/resources/collections/client/Client.ts">find</a>({ ...params }) -> Intercom.Collection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single collection by making a GET request to `https://api.intercom.io/help_center/collections/<id>`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.helpCenters.collections.find({
    collection_id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.helpCenters.FindCollectionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CollectionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.helpCenters.collections.<a href="/src/api/resources/helpCenters/resources/collections/client/Client.ts">update</a>({ ...params }) -> Intercom.Collection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can update the details of a single collection by making a PUT request to `https://api.intercom.io/collections/<id>`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.helpCenters.collections.update({
    collection_id: 1,
    name: "Update collection name"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.helpCenters.UpdateCollectionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CollectionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.helpCenters.collections.<a href="/src/api/resources/helpCenters/resources/collections/client/Client.ts">delete</a>({ ...params }) -> Intercom.DeletedCollectionObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can delete a single collection by making a DELETE request to `https://api.intercom.io/collections/<id>`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.helpCenters.collections.delete({
    collection_id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.helpCenters.DeleteCollectionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CollectionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## News Items
<details><summary><code>client.news.items.<a href="/src/api/resources/news/resources/items/client/Client.ts">list</a>() -> Intercom.PaginatedResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all news items
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.news.items.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `ItemsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.news.items.<a href="/src/api/resources/news/resources/items/client/Client.ts">create</a>({ ...params }) -> Intercom.NewsItem</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a news item
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.news.items.create({
    title: "Halloween is here!",
    body: "<p>New costumes in store for this spooky season</p>",
    sender_id: 991267834,
    state: "live",
    deliver_silently: true,
    labels: ["Product", "Update", "New"],
    reactions: ["\uD83D\uDE06", "\uD83D\uDE05"],
    newsfeed_assignments: [{
            newsfeed_id: 53,
            published_at: 1664638214
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.NewsItemRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ItemsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.news.items.<a href="/src/api/resources/news/resources/items/client/Client.ts">find</a>({ ...params }) -> Intercom.NewsItem</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single news item.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.news.items.find({
    news_item_id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.news.FindNewsItemRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ItemsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.news.items.<a href="/src/api/resources/news/resources/items/client/Client.ts">update</a>({ ...params }) -> Intercom.NewsItem</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.news.items.update({
    news_item_id: 1,
    body: {
        title: "Christmas is here!",
        body: "<p>New gifts in store for the jolly season</p>",
        sender_id: 991267845,
        reactions: ["\uD83D\uDE1D", "\uD83D\uDE02"]
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.news.UpdateNewsItemRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ItemsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.news.items.<a href="/src/api/resources/news/resources/items/client/Client.ts">delete</a>({ ...params }) -> Intercom.DeletedObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can delete a single news item.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.news.items.delete({
    news_item_id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.news.DeleteNewsItemRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ItemsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## News Feeds
<details><summary><code>client.news.feeds.<a href="/src/api/resources/news/resources/feeds/client/Client.ts">listItems</a>({ ...params }) -> Intercom.PaginatedResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all news items that are live on a given newsfeed
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.news.feeds.listItems({
    newsfeed_id: "123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.news.ListNewsFeedItemsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FeedsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.news.feeds.<a href="/src/api/resources/news/resources/feeds/client/Client.ts">list</a>() -> Intercom.PaginatedResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all newsfeeds
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.news.feeds.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `FeedsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.news.feeds.<a href="/src/api/resources/news/resources/feeds/client/Client.ts">find</a>({ ...params }) -> Intercom.Newsfeed</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single newsfeed
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.news.feeds.find({
    newsfeed_id: "123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.news.FindNewsFeedRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FeedsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## TicketTypes Attributes
<details><summary><code>client.ticketTypes.attributes.<a href="/src/api/resources/ticketTypes/resources/attributes/client/Client.ts">create</a>({ ...params }) -> Intercom.TicketTypeAttribute | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a new attribute for a ticket type.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketTypes.attributes.create({
    ticket_type_id: "ticket_type_id",
    name: "Attribute Title",
    description: "Attribute Description",
    data_type: "string",
    required_to_create: false
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ticketTypes.CreateTicketTypeAttributeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AttributesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ticketTypes.attributes.<a href="/src/api/resources/ticketTypes/resources/attributes/client/Client.ts">update</a>({ ...params }) -> Intercom.TicketTypeAttribute | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can update an existing attribute for a ticket type.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketTypes.attributes.update({
    ticket_type_id: "ticket_type_id",
    attribute_id: "attribute_id",
    description: "New Attribute Description"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.ticketTypes.UpdateTicketTypeAttributeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AttributesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Admins
<details><summary><code>client.unstable.admins.<a href="/src/api/resources/unstable/resources/admins/client/Client.ts">identifyAdmin</a>() -> Intercom.AdminWithApp | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>


You can view the currently authorised admin along with the embedded app object (a "workspace" in legacy terminology).

> 🚧 Single Sign On
>
> If you are building a custom "Log in with Intercom" flow for your site, and you call the `/me` endpoint to identify the logged-in user, you should not accept any sign-ins from users with unverified email addresses as it poses a potential impersonation security risk.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.admins.identifyAdmin();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `AdminsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.admins.<a href="/src/api/resources/unstable/resources/admins/client/Client.ts">setAwayAdmin</a>({ ...params }) -> Intercom.Admin | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can set an Admin as away for the Inbox.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.admins.setAwayAdmin({
    id: 1,
    away_mode_enabled: true,
    away_mode_reassign: true,
    away_status_reason_id: 12345
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.SetAwayAdminRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.admins.<a href="/src/api/resources/unstable/resources/admins/client/Client.ts">listActivityLogs</a>({ ...params }) -> Intercom.ActivityLogList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can get a log of activities by all admins in an app.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.admins.listActivityLogs({
    created_at_after: "1677253093",
    created_at_before: "1677861493"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.ListActivityLogsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.admins.<a href="/src/api/resources/unstable/resources/admins/client/Client.ts">listAdmins</a>() -> Intercom.AdminList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of admins for a given workspace.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.admins.listAdmins();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `AdminsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.admins.<a href="/src/api/resources/unstable/resources/admins/client/Client.ts">retrieveAdmin</a>({ ...params }) -> Intercom.Admin | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can retrieve the details of a single admin.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.admins.retrieveAdmin({
    id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.RetrieveAdminRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AdminsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## AI Content
<details><summary><code>client.unstable.aiContent.<a href="/src/api/resources/unstable/resources/aiContent/client/Client.ts">listContentImportSources</a>() -> Intercom.ContentImportSourcesList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can retrieve a list of all content import sources for a workspace.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.aiContent.listContentImportSources();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `AiContentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.aiContent.<a href="/src/api/resources/unstable/resources/aiContent/client/Client.ts">createContentImportSource</a>({ ...params }) -> Intercom.ContentImportSource</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a new content import source by sending a POST request to this endpoint.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.aiContent.createContentImportSource({
    url: "https://www.example.com"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.CreateContentImportSourceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AiContentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.aiContent.<a href="/src/api/resources/unstable/resources/aiContent/client/Client.ts">getContentImportSource</a>({ ...params }) -> Intercom.ContentImportSource</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.aiContent.getContentImportSource({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.GetContentImportSourceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AiContentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.aiContent.<a href="/src/api/resources/unstable/resources/aiContent/client/Client.ts">updateContentImportSource</a>({ ...params }) -> Intercom.ContentImportSource</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can update an existing content import source.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.aiContent.updateContentImportSource({
    id: "id",
    sync_behavior: "api",
    url: "https://www.example.com"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.UpdateContentImportSourceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AiContentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.aiContent.<a href="/src/api/resources/unstable/resources/aiContent/client/Client.ts">deleteContentImportSource</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can delete a content import source by making a DELETE request this endpoint. This will also delete all external pages that were imported from this source.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.aiContent.deleteContentImportSource({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.DeleteContentImportSourceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AiContentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.aiContent.<a href="/src/api/resources/unstable/resources/aiContent/client/Client.ts">listExternalPages</a>() -> Intercom.ExternalPagesList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can retrieve a list of all external pages for a workspace.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.aiContent.listExternalPages();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `AiContentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.aiContent.<a href="/src/api/resources/unstable/resources/aiContent/client/Client.ts">createExternalPage</a>({ ...params }) -> Intercom.ExternalPage</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a new external page by sending a POST request to this endpoint. If an external page already exists with the specified source_id and external_id, it will be updated instead.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.aiContent.createExternalPage({
    title: "Test",
    html: "<html><body><h1>Test</h1></body></html>",
    url: "https://www.example.com",
    source_id: 44,
    external_id: "abc1234"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.CreateExternalPageRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AiContentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.aiContent.<a href="/src/api/resources/unstable/resources/aiContent/client/Client.ts">getExternalPage</a>({ ...params }) -> Intercom.ExternalPage</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can retrieve an external page.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.aiContent.getExternalPage({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.GetExternalPageRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AiContentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.aiContent.<a href="/src/api/resources/unstable/resources/aiContent/client/Client.ts">updateExternalPage</a>({ ...params }) -> Intercom.ExternalPage</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can update an existing external page (if it was created via the API).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.aiContent.updateExternalPage({
    id: "id",
    title: "Test",
    html: "<html><body><h1>Test</h1></body></html>",
    url: "https://www.example.com",
    source_id: 47,
    external_id: "5678"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.UpdateExternalPageRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AiContentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.aiContent.<a href="/src/api/resources/unstable/resources/aiContent/client/Client.ts">deleteExternalPage</a>({ ...params }) -> Intercom.ExternalPage</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Sending a DELETE request for an external page will remove it from the content library UI and from being used for AI answers.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.aiContent.deleteExternalPage({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.DeleteExternalPageRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AiContentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Articles
<details><summary><code>client.unstable.articles.<a href="/src/api/resources/unstable/resources/articles/client/Client.ts">listArticles</a>() -> Intercom.ArticleList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all articles by making a GET request to `https://api.intercom.io/articles`.

> 📘 How are the articles sorted and ordered?
>
> Articles will be returned in descending order on the `updated_at` attribute. This means if you need to iterate through results then we'll show the most recently updated articles first.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.articles.listArticles();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `ArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.articles.<a href="/src/api/resources/unstable/resources/articles/client/Client.ts">createArticle</a>({ ...params }) -> Intercom.Article</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a new article by making a POST request to `https://api.intercom.io/articles`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.articles.createArticle({
    "key": "value"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `unknown` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.articles.<a href="/src/api/resources/unstable/resources/articles/client/Client.ts">retrieveArticle</a>({ ...params }) -> Intercom.Article</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single article by making a GET request to `https://api.intercom.io/articles/<id>`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.articles.retrieveArticle({
    id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.RetrieveArticleRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.articles.<a href="/src/api/resources/unstable/resources/articles/client/Client.ts">deleteArticle</a>({ ...params }) -> Intercom.DeletedArticleObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can delete a single article by making a DELETE request to `https://api.intercom.io/articles/<id>`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.articles.deleteArticle({
    id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.DeleteArticleRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.articles.<a href="/src/api/resources/unstable/resources/articles/client/Client.ts">searchArticles</a>({ ...params }) -> Intercom.ArticleSearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can search for articles by making a GET request to `https://api.intercom.io/articles/search`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.articles.searchArticles({
    phrase: "Getting started",
    state: "published",
    help_center_id: 1,
    highlight: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.SearchArticlesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Away Status Reasons
<details><summary><code>client.unstable.awayStatusReasons.<a href="/src/api/resources/unstable/resources/awayStatusReasons/client/Client.ts">listAwayStatusReasons</a>() -> Intercom.AwayStatusReason[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of all away status reasons configured for the workspace, including deleted ones.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.awayStatusReasons.listAwayStatusReasons();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `AwayStatusReasonsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Unstable Export
<details><summary><code>client.unstable.export.<a href="/src/api/resources/unstable/resources/export/client/Client.ts">enqueueANewReportingDataExportJob</a>({ ...params }) -> Intercom.PostExportReportingDataEnqueueResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.export.enqueueANewReportingDataExportJob({
    dataset_id: "conversation",
    attribute_ids: ["conversation_id", "conversation_started_at"],
    start_time: 1717490000,
    end_time: 1717510000
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.PostExportReportingDataEnqueueRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.export.<a href="/src/api/resources/unstable/resources/export/client/Client.ts">listAvailableDatasetsAndAttributes</a>() -> Intercom.GetExportReportingDataGetDatasetsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.export.listAvailableDatasetsAndAttributes();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `ExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Help Center
<details><summary><code>client.unstable.helpCenter.<a href="/src/api/resources/unstable/resources/helpCenter/client/Client.ts">listAllCollections</a>() -> Intercom.CollectionList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all collections by making a GET request to `https://api.intercom.io/help_center/collections`.

Collections will be returned in descending order on the `updated_at` attribute. This means if you need to iterate through results then we'll show the most recently updated collections first.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.helpCenter.listAllCollections();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `HelpCenterClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.helpCenter.<a href="/src/api/resources/unstable/resources/helpCenter/client/Client.ts">createCollection</a>({ ...params }) -> Intercom.Collection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a new collection by making a POST request to `https://api.intercom.io/help_center/collections.`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.helpCenter.createCollection({
    name: "Thanks for everything"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.CreateCollectionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `HelpCenterClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.helpCenter.<a href="/src/api/resources/unstable/resources/helpCenter/client/Client.ts">retrieveCollection</a>({ ...params }) -> Intercom.Collection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single collection by making a GET request to `https://api.intercom.io/help_center/collections/<id>`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.helpCenter.retrieveCollection({
    id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.RetrieveCollectionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `HelpCenterClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.helpCenter.<a href="/src/api/resources/unstable/resources/helpCenter/client/Client.ts">updateCollection</a>({ ...params }) -> Intercom.Collection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can update the details of a single collection by making a PUT request to `https://api.intercom.io/collections/<id>`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.helpCenter.updateCollection({
    id: 1,
    name: "Update collection name"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.UpdateCollectionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `HelpCenterClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.helpCenter.<a href="/src/api/resources/unstable/resources/helpCenter/client/Client.ts">deleteCollection</a>({ ...params }) -> Intercom.DeletedCollectionObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can delete a single collection by making a DELETE request to `https://api.intercom.io/collections/<id>`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.helpCenter.deleteCollection({
    id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.DeleteCollectionRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `HelpCenterClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.helpCenter.<a href="/src/api/resources/unstable/resources/helpCenter/client/Client.ts">retrieveHelpCenter</a>({ ...params }) -> Intercom.HelpCenter</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single Help Center by making a GET request to `https://api.intercom.io/help_center/help_center/<id>`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.helpCenter.retrieveHelpCenter({
    id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.RetrieveHelpCenterRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `HelpCenterClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.helpCenter.<a href="/src/api/resources/unstable/resources/helpCenter/client/Client.ts">listHelpCenters</a>() -> Intercom.HelpCenterList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can list all Help Centers by making a GET request to `https://api.intercom.io/help_center/help_centers`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.helpCenter.listHelpCenters();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `HelpCenterClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Internal Articles
<details><summary><code>client.unstable.internalArticles.<a href="/src/api/resources/unstable/resources/internalArticles/client/Client.ts">listInternalArticles</a>() -> Intercom.InternalArticleList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all internal articles by making a GET request to `https://api.intercom.io/internal_articles`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.internalArticles.listInternalArticles();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `InternalArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.internalArticles.<a href="/src/api/resources/unstable/resources/internalArticles/client/Client.ts">createInternalArticle</a>({ ...params }) -> Intercom.InternalArticle</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a new internal article by making a POST request to `https://api.intercom.io/internal_articles`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.internalArticles.createInternalArticle({
    title: "Thanks for everything",
    body: "Body of the Article",
    author_id: 991266252,
    owner_id: 991266252
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.CreateInternalArticleRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InternalArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.internalArticles.<a href="/src/api/resources/unstable/resources/internalArticles/client/Client.ts">retrieveInternalArticle</a>({ ...params }) -> Intercom.InternalArticle</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single internal article by making a GET request to `https://api.intercom.io/internal_articles/<id>`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.internalArticles.retrieveInternalArticle({
    id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.RetrieveInternalArticleRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InternalArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.internalArticles.<a href="/src/api/resources/unstable/resources/internalArticles/client/Client.ts">updateInternalArticle</a>({ ...params }) -> Intercom.InternalArticle</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can update the details of a single internal article by making a PUT request to `https://api.intercom.io/internal_articles/<id>`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.internalArticles.updateInternalArticle({
    id: 1,
    title: "Christmas is here!",
    body: "<p>New gifts in store for the jolly season</p>"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.UpdateInternalArticleRequestBody` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InternalArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.internalArticles.<a href="/src/api/resources/unstable/resources/internalArticles/client/Client.ts">deleteInternalArticle</a>({ ...params }) -> Intercom.DeletedInternalArticleObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can delete a single internal article by making a DELETE request to `https://api.intercom.io/internal_articles/<id>`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.internalArticles.deleteInternalArticle({
    id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.DeleteInternalArticleRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InternalArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.internalArticles.<a href="/src/api/resources/unstable/resources/internalArticles/client/Client.ts">searchInternalArticles</a>({ ...params }) -> Intercom.InternalArticleSearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can search for internal articles by making a GET request to `https://api.intercom.io/internal_articles/search`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.internalArticles.searchInternalArticles({
    folder_id: "folder_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.SearchInternalArticlesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InternalArticlesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Companies
<details><summary><code>client.unstable.companies.<a href="/src/api/resources/unstable/resources/companies/client/Client.ts">retrieveCompany</a>({ ...params }) -> Intercom.CompanyList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a single company by passing in `company_id` or `name`.

  `https://api.intercom.io/companies?name={name}`

  `https://api.intercom.io/companies?company_id={company_id}`

You can fetch all companies and filter by `segment_id` or `tag_id` as a query parameter.

  `https://api.intercom.io/companies?tag_id={tag_id}`

  `https://api.intercom.io/companies?segment_id={segment_id}`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.companies.retrieveCompany({
    name: "my company",
    company_id: "12345",
    tag_id: "678910",
    segment_id: "98765",
    page: 1,
    per_page: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.RetrieveCompanyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.companies.<a href="/src/api/resources/unstable/resources/companies/client/Client.ts">createOrUpdateCompany</a>({ ...params }) -> Intercom.Company</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create or update a company.

Companies will be only visible in Intercom when there is at least one associated user.

Companies are looked up via `company_id` in a `POST` request, if not found via `company_id`, the new company will be created, if found, that company will be updated.

{% admonition type="warning" name="Using `company_id`" %}
  You can set a unique `company_id` value when creating a company. However, it is not possible to update `company_id`. Be sure to set a unique value once upon creation of the company.
{% /admonition %}
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.companies.createOrUpdateCompany({
    "key": "value"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `unknown` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.companies.<a href="/src/api/resources/unstable/resources/companies/client/Client.ts">retrieveACompanyById</a>({ ...params }) -> Intercom.Company</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a single company.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.companies.retrieveACompanyById({
    id: "5f4d3c1c-7b1b-4d7d-a97e-6095715c6632"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.RetrieveACompanyByIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.companies.<a href="/src/api/resources/unstable/resources/companies/client/Client.ts">updateCompany</a>({ ...params }) -> Intercom.Company</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can update a single company using the Intercom provisioned `id`.

{% admonition type="warning" name="Using `company_id`" %}
  When updating a company it is not possible to update `company_id`. This can only be set once upon creation of the company.
{% /admonition %}
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.companies.updateCompany({
    id: "5f4d3c1c-7b1b-4d7d-a97e-6095715c6632"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.UpdateCompanyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.companies.<a href="/src/api/resources/unstable/resources/companies/client/Client.ts">deleteCompany</a>({ ...params }) -> Intercom.DeletedCompanyObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can delete a single company.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.companies.deleteCompany({
    id: "5f4d3c1c-7b1b-4d7d-a97e-6095715c6632"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.DeleteCompanyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.companies.<a href="/src/api/resources/unstable/resources/companies/client/Client.ts">listAttachedContacts</a>({ ...params }) -> Intercom.CompanyAttachedContacts</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all contacts that belong to a company.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.companies.listAttachedContacts({
    id: "5f4d3c1c-7b1b-4d7d-a97e-6095715c6632"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.ListAttachedContactsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.companies.<a href="/src/api/resources/unstable/resources/companies/client/Client.ts">listAttachedSegmentsForCompanies</a>({ ...params }) -> Intercom.CompanyAttachedSegments</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all segments that belong to a company.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.companies.listAttachedSegmentsForCompanies({
    id: "5f4d3c1c-7b1b-4d7d-a97e-6095715c6632"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.ListAttachedSegmentsForCompaniesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.companies.<a href="/src/api/resources/unstable/resources/companies/client/Client.ts">listAllCompanies</a>({ ...params }) -> Intercom.CompanyList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can list companies. The company list is sorted by the `last_request_at` field and by default is ordered descending, most recently requested first.

Note that the API does not include companies who have no associated users in list responses.

When using the Companies endpoint and the pages object to iterate through the returned companies, there is a limit of 10,000 Companies that can be returned. If you need to list or iterate on more than 10,000 Companies, please use the [Scroll API](https://developers.intercom.com/reference#iterating-over-all-companies).
{% admonition type="warning" name="Pagination" %}
  You can use pagination to limit the number of results returned. The default is `20` results per page.
  See the [pagination section](https://developers.intercom.com/docs/build-an-integration/learn-more/rest-apis/pagination/#pagination-for-list-apis) for more details on how to use the `starting_after` param.
{% /admonition %}
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.companies.listAllCompanies({
    page: 1,
    per_page: 1,
    order: "desc"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.ListAllCompaniesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.companies.<a href="/src/api/resources/unstable/resources/companies/client/Client.ts">scrollOverAllCompanies</a>({ ...params }) -> Intercom.CompanyScroll | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

      The `list all companies` functionality does not work well for huge datasets, and can result in errors and performance problems when paging deeply. The Scroll API provides an efficient mechanism for iterating over all companies in a dataset.

- Each app can only have 1 scroll open at a time. You'll get an error message if you try to have more than one open per app.
- If the scroll isn't used for 1 minute, it expires and calls with that scroll param will fail
- If the end of the scroll is reached, "companies" will be empty and the scroll parameter will expire

{% admonition type="info" name="Scroll Parameter" %}
  You can get the first page of companies by simply sending a GET request to the scroll endpoint.
  For subsequent requests you will need to use the scroll parameter from the response.
{% /admonition %}
{% admonition type="danger" name="Scroll network timeouts" %}
  Since scroll is often used on large datasets network errors such as timeouts can be encountered. When this occurs you will see a HTTP 500 error with the following message:
  "Request failed due to an internal network error. Please restart the scroll operation."
  If this happens, you will need to restart your scroll query: It is not possible to continue from a specific point when using scroll.
{% /admonition %}
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.companies.scrollOverAllCompanies({
    scroll_param: "scroll_param"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.ScrollOverAllCompaniesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.companies.<a href="/src/api/resources/unstable/resources/companies/client/Client.ts">attachContactToACompany</a>({ ...params }) -> Intercom.Company</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can attach a company to a single contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.companies.attachContactToACompany({
    id: "id",
    company_id: "6762f09a1bb69f9f2193bb34"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.AttachContactToACompanyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.companies.<a href="/src/api/resources/unstable/resources/companies/client/Client.ts">detachContactFromACompany</a>({ ...params }) -> Intercom.Company</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can detach a company from a single contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.companies.detachContactFromACompany({
    contact_id: "58a430d35458202d41b1e65b",
    id: "58a430d35458202d41b1e65b"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.DetachContactFromACompanyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Notes
<details><summary><code>client.unstable.notes.<a href="/src/api/resources/unstable/resources/notes/client/Client.ts">listCompanyNotes</a>({ ...params }) -> Intercom.NoteList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of notes that are associated to a company.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.notes.listCompanyNotes({
    id: "5f4d3c1c-7b1b-4d7d-a97e-6095715c6632"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.ListCompanyNotesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NotesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.notes.<a href="/src/api/resources/unstable/resources/notes/client/Client.ts">listNotes</a>({ ...params }) -> Intercom.NoteList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of notes that are associated to a contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.notes.listNotes({
    id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.ListNotesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NotesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.notes.<a href="/src/api/resources/unstable/resources/notes/client/Client.ts">createNote</a>({ ...params }) -> Intercom.Note</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can add a note to a single contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.notes.createNote({
    id: 1,
    body: "Hello",
    contact_id: "6762f0ad1bb69f9f2193bb62",
    admin_id: "123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.CreateNoteRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NotesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.notes.<a href="/src/api/resources/unstable/resources/notes/client/Client.ts">retrieveNote</a>({ ...params }) -> Intercom.Note</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single note.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.notes.retrieveNote({
    id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.RetrieveNoteRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NotesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Contacts
<details><summary><code>client.unstable.contacts.<a href="/src/api/resources/unstable/resources/contacts/client/Client.ts">listCompaniesForAContact</a>({ ...params }) -> Intercom.ContactAttachedCompanies</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of companies that are associated to a contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.contacts.listCompaniesForAContact({
    id: "63a07ddf05a32042dffac965"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.ListCompaniesForAContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.contacts.<a href="/src/api/resources/unstable/resources/contacts/client/Client.ts">listSegmentsForAContact</a>({ ...params }) -> Intercom.ContactSegments</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of segments that are associated to a contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.contacts.listSegmentsForAContact({
    contact_id: "63a07ddf05a32042dffac965"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.ListSegmentsForAContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.contacts.<a href="/src/api/resources/unstable/resources/contacts/client/Client.ts">listSubscriptionsForAContact</a>({ ...params }) -> Intercom.SubscriptionTypeList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of subscription types that are attached to a contact. These can be subscriptions that a user has 'opted-in' to or has 'opted-out' from, depending on the subscription type.
This will return a list of Subscription Type objects that the contact is associated with.

The data property will show a combined list of:

  1.Opt-out subscription types that the user has opted-out from.
  2.Opt-in subscription types that the user has opted-in to receiving.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.contacts.listSubscriptionsForAContact({
    contact_id: "63a07ddf05a32042dffac965"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.ListSubscriptionsForAContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.contacts.<a href="/src/api/resources/unstable/resources/contacts/client/Client.ts">listTagsForAContact</a>({ ...params }) -> Intercom.TagList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all tags that are attached to a specific contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.contacts.listTagsForAContact({
    contact_id: "63a07ddf05a32042dffac965"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.ListTagsForAContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.contacts.<a href="/src/api/resources/unstable/resources/contacts/client/Client.ts">showContact</a>({ ...params }) -> Intercom.ShowContactResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.contacts.showContact({
    id: "63a07ddf05a32042dffac965"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.ShowContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.contacts.<a href="/src/api/resources/unstable/resources/contacts/client/Client.ts">updateContact</a>({ ...params }) -> Intercom.UpdateContactResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can update an existing contact (ie. user or lead).

{% admonition type="info" %}
  This endpoint handles both **contact updates** and **custom object associations**.

  See _`update a contact with an association to a custom object instance`_ in the request/response examples to see the custom object association format.
{% /admonition %}
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.contacts.updateContact({
    id: "63a07ddf05a32042dffac965",
    email: "joebloggs@intercom.io",
    name: "joe bloggs"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.UpdateContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.contacts.<a href="/src/api/resources/unstable/resources/contacts/client/Client.ts">deleteContact</a>({ ...params }) -> Intercom.ContactDeleted</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can delete a single contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.contacts.deleteContact({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.DeleteContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.contacts.<a href="/src/api/resources/unstable/resources/contacts/client/Client.ts">mergeContact</a>({ ...params }) -> Intercom.MergeContactResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can merge a contact with a `role` of `lead` into a contact with a `role` of `user`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.contacts.mergeContact({
    from: "6762f0d51bb69f9f2193bb7f",
    into: "6762f0d51bb69f9f2193bb80"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.MergeContactsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.contacts.<a href="/src/api/resources/unstable/resources/contacts/client/Client.ts">searchContacts</a>({ ...params }) -> Intercom.ContactList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can search for multiple contacts by the value of their attributes in order to fetch exactly who you want.

To search for contacts, you need to send a `POST` request to `https://api.intercom.io/contacts/search`.

This will accept a query object in the body which will define your filters in order to search for contacts.

{% admonition type="warning" name="Optimizing search queries" %}
  Search queries can be complex, so optimizing them can help the performance of your search.
  Use the `AND` and `OR` operators to combine multiple filters to get the exact results you need and utilize
  pagination to limit the number of results returned. The default is `50` results per page.
  See the [pagination section](https://developers.intercom.com/docs/build-an-integration/learn-more/rest-apis/pagination/#example-search-conversations-request) for more details on how to use the `starting_after` param.
{% /admonition %}
### Contact Creation Delay

If a contact has recently been created, there is a possibility that it will not yet be available when searching. This means that it may not appear in the response. This delay can take a few minutes. If you need to be instantly notified it is recommended to use webhooks and iterate to see if they match your search filters.

### Nesting & Limitations

You can nest these filters in order to get even more granular insights that pinpoint exactly what you need. Example: (1 OR 2) AND (3 OR 4).
There are some limitations to the amount of multiple's there can be:
* There's a limit of max 2 nested filters
* There's a limit of max 15 filters for each AND or OR group

### Searching for Timestamp Fields

All timestamp fields (created_at, updated_at etc.) are indexed as Dates for Contact Search queries; Datetime queries are not currently supported. This means you can only query for timestamp fields by day - not hour, minute or second.
For example, if you search for all Contacts with a created_at value greater (>) than 1577869200 (the UNIX timestamp for January 1st, 2020 9:00 AM), that will be interpreted as 1577836800 (January 1st, 2020 12:00 AM). The search results will then include Contacts created from January 2nd, 2020 12:00 AM onwards.
If you'd like to get contacts created on January 1st, 2020 you should search with a created_at value equal (=) to 1577836800 (January 1st, 2020 12:00 AM).
This behaviour applies only to timestamps used in search queries. The search results will still contain the full UNIX timestamp and be sorted accordingly.

### Accepted Fields

Most key listed as part of the Contacts Model are searchable, whether writeable or not. The value you search for has to match the accepted type, otherwise the query will fail (ie. as `created_at` accepts a date, the `value` cannot be a string such as `"foorbar"`).

| Field                              | Type                           |
| ---------------------------------- | ------------------------------ |
| id                                 | String                         |
| role                               | String<br>Accepts user or lead |
| name                               | String                         |
| avatar                             | String                         |
| owner_id                           | Integer                        |
| email                              | String                         |
| email_domain                       | String                         |
| phone                              | String                         |
| formatted_phone                    | String                         |
| external_id                        | String                         |
| created_at                         | Date (UNIX Timestamp)          |
| signed_up_at                       | Date (UNIX Timestamp)          |
| updated_at                         | Date (UNIX Timestamp)          |
| last_seen_at                       | Date (UNIX Timestamp)          |
| last_contacted_at                  | Date (UNIX Timestamp)          |
| last_replied_at                    | Date (UNIX Timestamp)          |
| last_email_opened_at               | Date (UNIX Timestamp)          |
| last_email_clicked_at              | Date (UNIX Timestamp)          |
| language_override                  | String                         |
| browser                            | String                         |
| browser_language                   | String                         |
| os                                 | String                         |
| location.country                   | String                         |
| location.region                    | String                         |
| location.city                      | String                         |
| unsubscribed_from_emails           | Boolean                        |
| marked_email_as_spam               | Boolean                        |
| has_hard_bounced                   | Boolean                        |
| ios_last_seen_at                   | Date (UNIX Timestamp)          |
| ios_app_version                    | String                         |
| ios_device                         | String                         |
| ios_app_device                     | String                         |
| ios_os_version                     | String                         |
| ios_app_name                       | String                         |
| ios_sdk_version                    | String                         |
| android_last_seen_at               | Date (UNIX Timestamp)          |
| android_app_version                | String                         |
| android_device                     | String                         |
| android_app_name                   | String                         |
| andoid_sdk_version                 | String                         |
| segment_id                         | String                         |
| tag_id                             | String                         |
| custom_attributes.{attribute_name} | String                         |

### Accepted Operators

{% admonition type="warning" name="Searching based on `created_at`" %}
  You cannot use the `<=` or `>=` operators to search by `created_at`.
{% /admonition %}

The table below shows the operators you can use to define how you want to search for the value.  The operator should be put in as a string (`"="`). The operator has to be compatible with the field's type (eg. you cannot search with `>` for a given string value as it's only compatible for integer's and dates).

| Operator | Valid Types                      | Description                                                      |
| :------- | :------------------------------- | :--------------------------------------------------------------- |
| =        | All                              | Equals                                                           |
| !=       | All                              | Doesn't Equal                                                    |
| IN       | All                              | In<br>Shortcut for `OR` queries<br>Values must be in Array       |
| NIN      | All                              | Not In<br>Shortcut for `OR !` queries<br>Values must be in Array |
| >        | Integer<br>Date (UNIX Timestamp) | Greater than                                                     |
| <       | Integer<br>Date (UNIX Timestamp) | Lower than                                                       |
| ~        | String                           | Contains                                                         |
| !~       | String                           | Doesn't Contain                                                  |
| ^        | String                           | Starts With                                                      |
| $        | String                           | Ends With                                                        |
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.contacts.searchContacts({
    query: {
        operator: "AND",
        value: [{
                field: "created_at",
                operator: ">",
                value: "1306054154"
            }]
    },
    pagination: {
        per_page: 5
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.SearchRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.contacts.<a href="/src/api/resources/unstable/resources/contacts/client/Client.ts">listContacts</a>() -> Intercom.ContactList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all contacts (ie. users or leads) in your workspace.
{% admonition type="warning" name="Pagination" %}
  You can use pagination to limit the number of results returned. The default is `50` results per page.
  See the [pagination section](https://developers.intercom.com/docs/build-an-integration/learn-more/rest-apis/pagination/#pagination-for-list-apis) for more details on how to use the `starting_after` param.
{% /admonition %}
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.contacts.listContacts();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.contacts.<a href="/src/api/resources/unstable/resources/contacts/client/Client.ts">createContact</a>({ ...params }) -> Intercom.CreateContactResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a new contact (ie. user or lead).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.contacts.createContact({
    "email": "joebloggs@intercom.io"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.CreateContactRequestTwo` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.contacts.<a href="/src/api/resources/unstable/resources/contacts/client/Client.ts">showContactByExternalId</a>({ ...params }) -> Intercom.ShowContactByExternalIdResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single contact by external ID. Note that this endpoint only supports users and not leads.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.contacts.showContactByExternalId({
    external_id: "cdd29344-5e0c-4ef0-ac56-f9ba2979bc27"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.ShowContactByExternalIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.contacts.<a href="/src/api/resources/unstable/resources/contacts/client/Client.ts">archiveContact</a>({ ...params }) -> Intercom.ContactArchived</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can archive a single contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.contacts.archiveContact({
    id: "63a07ddf05a32042dffac965"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.ArchiveContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.contacts.<a href="/src/api/resources/unstable/resources/contacts/client/Client.ts">unarchiveContact</a>({ ...params }) -> Intercom.ContactUnarchived</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can unarchive a single contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.contacts.unarchiveContact({
    id: "63a07ddf05a32042dffac965"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.UnarchiveContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.contacts.<a href="/src/api/resources/unstable/resources/contacts/client/Client.ts">blockContact</a>({ ...params }) -> Intercom.ContactBlocked</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Block a single contact.<br>**Note:** conversations of the contact will also be archived during the process.<br>More details in [FAQ How do I block Inbox spam?](https://www.intercom.com/help/en/articles/8838656-inbox-faqs)
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.contacts.blockContact({
    id: "63a07ddf05a32042dffac965"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.BlockContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Subscription Types
<details><summary><code>client.unstable.subscriptionTypes.<a href="/src/api/resources/unstable/resources/subscriptionTypes/client/Client.ts">attachSubscriptionTypeToContact</a>({ ...params }) -> Intercom.SubscriptionType</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can add a specific subscription to a contact. In Intercom, we have two different subscription types based on user consent - opt-out and opt-in:

  1.Attaching a contact to an opt-out subscription type will opt that user out from receiving messages related to that subscription type.

  2.Attaching a contact to an opt-in subscription type will opt that user in to receiving messages related to that subscription type.

This will return a subscription type model for the subscription type that was added to the contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.subscriptionTypes.attachSubscriptionTypeToContact({
    contact_id: "63a07ddf05a32042dffac965",
    id: "37846",
    consent_type: "opt_in"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.AttachSubscriptionTypeToContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SubscriptionTypesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.subscriptionTypes.<a href="/src/api/resources/unstable/resources/subscriptionTypes/client/Client.ts">detachSubscriptionTypeToContact</a>({ ...params }) -> Intercom.SubscriptionType</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can remove a specific subscription from a contact. This will return a subscription type model for the subscription type that was removed from the contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.subscriptionTypes.detachSubscriptionTypeToContact({
    contact_id: "63a07ddf05a32042dffac965",
    id: "37846"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.DetachSubscriptionTypeToContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SubscriptionTypesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.subscriptionTypes.<a href="/src/api/resources/unstable/resources/subscriptionTypes/client/Client.ts">listSubscriptionTypes</a>() -> Intercom.SubscriptionTypeList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can list all subscription types. A list of subscription type objects will be returned.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.subscriptionTypes.listSubscriptionTypes();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `SubscriptionTypesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Tags
<details><summary><code>client.unstable.tags.<a href="/src/api/resources/unstable/resources/tags/client/Client.ts">attachTagToContact</a>({ ...params }) -> Intercom.Tag</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can tag a specific contact. This will return a tag object for the tag that was added to the contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.tags.attachTagToContact({
    contact_id: "63a07ddf05a32042dffac965",
    id: "7522907"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.AttachTagToContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.tags.<a href="/src/api/resources/unstable/resources/tags/client/Client.ts">detachTagFromContact</a>({ ...params }) -> Intercom.Tag</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can remove tag from a specific contact. This will return a tag object for the tag that was removed from the contact.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.tags.detachTagFromContact({
    contact_id: "63a07ddf05a32042dffac965",
    id: "7522907"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.DetachTagFromContactRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.tags.<a href="/src/api/resources/unstable/resources/tags/client/Client.ts">attachTagToConversation</a>({ ...params }) -> Intercom.Tag</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can tag a specific conversation. This will return a tag object for the tag that was added to the conversation.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.tags.attachTagToConversation({
    conversation_id: "64619700005694",
    id: "7522907",
    admin_id: "780"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.AttachTagToConversationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.tags.<a href="/src/api/resources/unstable/resources/tags/client/Client.ts">detachTagFromConversation</a>({ ...params }) -> Intercom.Tag</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can remove tag from a specific conversation. This will return a tag object for the tag that was removed from the conversation.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.tags.detachTagFromConversation({
    conversation_id: "64619700005694",
    id: "7522907",
    admin_id: "123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.DetachTagFromConversationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.tags.<a href="/src/api/resources/unstable/resources/tags/client/Client.ts">listTags</a>() -> Intercom.TagList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all tags for a given workspace.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.tags.listTags();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.tags.<a href="/src/api/resources/unstable/resources/tags/client/Client.ts">createTag</a>({ ...params }) -> Intercom.Tag</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can use this endpoint to perform the following operations:

  **1. Create a new tag:** You can create a new tag by passing in the tag name as specified in "Create or Update Tag Request Payload" described below.

  **2. Update an existing tag:** You can update an existing tag by passing the id of the tag as specified in "Create or Update Tag Request Payload" described below.

  **3. Tag Companies:** You can tag single company or a list of companies. You can tag a company by passing in the tag name and the company details as specified in "Tag Company Request Payload" described below. Also, if the tag doesn't exist then a new one will be created automatically.

  **4. Untag Companies:** You can untag a single company or a list of companies. You can untag a company by passing in the tag id and the company details as specified in "Untag Company Request Payload" described below.

  **5. Tag Multiple Users:** You can tag a list of users. You can tag the users by passing in the tag name and the user details as specified in "Tag Users Request Payload" described below.

Each operation will return a tag object.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.tags.createTag({
    name: "test"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.CreateTagRequestBody` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.tags.<a href="/src/api/resources/unstable/resources/tags/client/Client.ts">findTag</a>({ ...params }) -> Intercom.Tag</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of tags that are on the workspace by their id.
This will return a tag object.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.tags.findTag({
    id: "123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.FindTagRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.tags.<a href="/src/api/resources/unstable/resources/tags/client/Client.ts">deleteTag</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can delete the details of tags that are on the workspace by passing in the id.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.tags.deleteTag({
    id: "123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.DeleteTagRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.tags.<a href="/src/api/resources/unstable/resources/tags/client/Client.ts">attachTagToTicket</a>({ ...params }) -> Intercom.Tag</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can tag a specific ticket. This will return a tag object for the tag that was added to the ticket.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.tags.attachTagToTicket({
    ticket_id: "64619700005694",
    id: "7522907",
    admin_id: "780"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.AttachTagToTicketRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.tags.<a href="/src/api/resources/unstable/resources/tags/client/Client.ts">detachTagFromTicket</a>({ ...params }) -> Intercom.Tag</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can remove tag from a specific ticket. This will return a tag object for the tag that was removed from the ticket.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.tags.detachTagFromTicket({
    ticket_id: "64619700005694",
    id: "7522907",
    admin_id: "123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.DetachTagFromTicketRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Conversations
<details><summary><code>client.unstable.conversations.<a href="/src/api/resources/unstable/resources/conversations/client/Client.ts">listConversations</a>({ ...params }) -> Intercom.ConversationList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all conversations.

You can optionally request the result page size and the cursor to start after to fetch the result.
{% admonition type="warning" name="Pagination" %}
  You can use pagination to limit the number of results returned. The default is `20` results per page.
  See the [pagination section](https://developers.intercom.com/docs/build-an-integration/learn-more/rest-apis/pagination/#pagination-for-list-apis) for more details on how to use the `starting_after` param.
{% /admonition %}
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.conversations.listConversations({
    per_page: 1,
    starting_after: "starting_after"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.ListConversationsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.conversations.<a href="/src/api/resources/unstable/resources/conversations/client/Client.ts">createConversation</a>({ ...params }) -> Intercom.Message</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a conversation that has been initiated by a contact (ie. user or lead).
The conversation can be an in-app message only.

{% admonition type="info" name="Sending for visitors" %}
You can also send a message from a visitor by specifying their `user_id` or `id` value in the `from` field, along with a `type` field value of `contact`.
This visitor will be automatically converted to a contact with a lead role once the conversation is created.
{% /admonition %}

This will return the Message model that has been created.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.conversations.createConversation({
    from: {
        type: "user",
        id: "6762f11b1bb69f9f2193bba3"
    },
    body: "Hello there"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.CreateConversationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.conversations.<a href="/src/api/resources/unstable/resources/conversations/client/Client.ts">retrieveConversation</a>({ ...params }) -> Intercom.Conversation</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>


You can fetch the details of a single conversation.

This will return a single Conversation model with all its conversation parts.

{% admonition type="warning" name="Hard limit of 500 parts" %}
The maximum number of conversation parts that can be returned via the API is 500. If you have more than that we will return the 500 most recent conversation parts.
{% /admonition %}

For AI agent conversation metadata, please note that you need to have the agent enabled in your workspace, which is a [paid feature](https://www.intercom.com/help/en/articles/8205718-fin-resolutions#h_97f8c2e671).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.conversations.retrieveConversation({
    id: 1,
    display_as: "plaintext",
    include_translations: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.RetrieveConversationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.conversations.<a href="/src/api/resources/unstable/resources/conversations/client/Client.ts">updateConversation</a>({ ...params }) -> Intercom.Conversation</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>


You can update an existing conversation.

{% admonition type="info" name="Replying and other actions" %}
If you want to reply to a coveration or take an action such as assign, unassign, open, close or snooze, take a look at the reply and manage endpoints.
{% /admonition %}

{% admonition type="info" %}
  This endpoint handles both **conversation updates** and **custom object associations**.

  See _`update a conversation with an association to a custom object instance`_ in the request/response examples to see the custom object association format.
{% /admonition %}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.conversations.updateConversation({
    id: 1,
    display_as: "plaintext",
    read: true,
    title: "new conversation title",
    custom_attributes: {
        "issue_type": "Billing",
        "priority": "High"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.UpdateConversationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.conversations.<a href="/src/api/resources/unstable/resources/conversations/client/Client.ts">deleteConversation</a>({ ...params }) -> Intercom.ConversationDeleted</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can delete a single conversation.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.conversations.deleteConversation({
    id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.DeleteConversationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.conversations.<a href="/src/api/resources/unstable/resources/conversations/client/Client.ts">searchConversations</a>({ ...params }) -> Intercom.ConversationList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can search for multiple conversations by the value of their attributes in order to fetch exactly which ones you want.

To search for conversations, you need to send a `POST` request to `https://api.intercom.io/conversations/search`.

This will accept a query object in the body which will define your filters in order to search for conversations.
{% admonition type="warning" name="Optimizing search queries" %}
  Search queries can be complex, so optimizing them can help the performance of your search.
  Use the `AND` and `OR` operators to combine multiple filters to get the exact results you need and utilize
  pagination to limit the number of results returned. The default is `20` results per page and maximum is `150`.
  See the [pagination section](https://developers.intercom.com/docs/build-an-integration/learn-more/rest-apis/pagination/#example-search-conversations-request) for more details on how to use the `starting_after` param.
{% /admonition %}

### Nesting & Limitations

You can nest these filters in order to get even more granular insights that pinpoint exactly what you need. Example: (1 OR 2) AND (3 OR 4).
There are some limitations to the amount of multiple's there can be:
- There's a limit of max 2 nested filters
- There's a limit of max 15 filters for each AND or OR group

### Accepted Fields

Most keys listed in the conversation model are searchable, whether writeable or not. The value you search for has to match the accepted type, otherwise the query will fail (ie. as `created_at` accepts a date, the `value` cannot be a string such as `"foorbar"`).
The `source.body` field is unique as the search will not be performed against the entire value, but instead against every element of the value separately. For example, when searching for a conversation with a `"I need support"` body - the query should contain a `=` operator with the value `"support"` for such conversation to be returned. A query with a `=` operator and a `"need support"` value will not yield a result.

| Field                                     | Type                                                                                                                                                   |
| :---------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| id                                        | String                                                                                                                                                 |
| created_at                                | Date (UNIX timestamp)                                                                                                                                  |
| updated_at                                | Date (UNIX timestamp)                                                                                                                                  |
| source.type                               | String<br>Accepted fields are `conversation`, `email`, `facebook`, `instagram`, `phone_call`, `phone_switch`, `push`, `sms`, `twitter` and `whatsapp`. |
| source.id                                 | String                                                                                                                                                 |
| source.delivered_as                       | String                                                                                                                                                 |
| source.subject                            | String                                                                                                                                                 |
| source.body                               | String                                                                                                                                                 |
| source.author.id                          | String                                                                                                                                                 |
| source.author.type                        | String                                                                                                                                                 |
| source.author.name                        | String                                                                                                                                                 |
| source.author.email                       | String                                                                                                                                                 |
| source.url                                | String                                                                                                                                                 |
| contact_ids                               | String                                                                                                                                                 |
| teammate_ids                              | String                                                                                                                                                 |
| admin_assignee_id                         | String                                                                                                                                                 |
| team_assignee_id                          | String                                                                                                                                                 |
| channel_initiated                         | String                                                                                                                                                 |
| open                                      | Boolean                                                                                                                                                |
| read                                      | Boolean                                                                                                                                                |
| state                                     | String                                                                                                                                                 |
| waiting_since                             | Date (UNIX timestamp)                                                                                                                                  |
| snoozed_until                             | Date (UNIX timestamp)                                                                                                                                  |
| tag_ids                                   | String                                                                                                                                                 |
| priority                                  | String                                                                                                                                                 |
| statistics.time_to_assignment             | Integer                                                                                                                                                |
| statistics.time_to_admin_reply            | Integer                                                                                                                                                |
| statistics.time_to_first_close            | Integer                                                                                                                                                |
| statistics.time_to_last_close             | Integer                                                                                                                                                |
| statistics.median_time_to_reply           | Integer                                                                                                                                                |
| statistics.first_contact_reply_at         | Date (UNIX timestamp)                                                                                                                                  |
| statistics.first_assignment_at            | Date (UNIX timestamp)                                                                                                                                  |
| statistics.first_admin_reply_at           | Date (UNIX timestamp)                                                                                                                                  |
| statistics.first_close_at                 | Date (UNIX timestamp)                                                                                                                                  |
| statistics.last_assignment_at             | Date (UNIX timestamp)                                                                                                                                  |
| statistics.last_assignment_admin_reply_at | Date (UNIX timestamp)                                                                                                                                  |
| statistics.last_contact_reply_at          | Date (UNIX timestamp)                                                                                                                                  |
| statistics.last_admin_reply_at            | Date (UNIX timestamp)                                                                                                                                  |
| statistics.last_close_at                  | Date (UNIX timestamp)                                                                                                                                  |
| statistics.last_closed_by_id              | String                                                                                                                                                 |
| statistics.count_reopens                  | Integer                                                                                                                                                |
| statistics.count_assignments              | Integer                                                                                                                                                |
| statistics.count_conversation_parts       | Integer                                                                                                                                                |
| conversation_rating.requested_at          | Date (UNIX timestamp)                                                                                                                                  |
| conversation_rating.replied_at            | Date (UNIX timestamp)                                                                                                                                  |
| conversation_rating.score                 | Integer                                                                                                                                                |
| conversation_rating.remark                | String                                                                                                                                                 |
| conversation_rating.contact_id            | String                                                                                                                                                 |
| conversation_rating.admin_d               | String                                                                                                                                                 |
| ai_agent_participated                     | Boolean                                                                                                                                                |
| ai_agent.resolution_state                 | String                                                                                                                                                 |
| ai_agent.last_answer_type                 | String                                                                                                                                                 |
| ai_agent.rating                           | Integer                                                                                                                                                |
| ai_agent.rating_remark                    | String                                                                                                                                                 |
| ai_agent.source_type                      | String                                                                                                                                                 |
| ai_agent.source_title                     | String                                                                                                                                                 |

### Accepted Operators

The table below shows the operators you can use to define how you want to search for the value.  The operator should be put in as a string (`"="`). The operator has to be compatible with the field's type  (eg. you cannot search with `>` for a given string value as it's only compatible for integer's and dates).

| Operator | Valid Types                    | Description                                                  |
| :------- | :----------------------------- | :----------------------------------------------------------- |
| =        | All                            | Equals                                                       |
| !=       | All                            | Doesn't Equal                                                |
| IN       | All                            | In  Shortcut for `OR` queries  Values most be in Array       |
| NIN      | All                            | Not In  Shortcut for `OR !` queries  Values must be in Array |
| >        | Integer  Date (UNIX Timestamp) | Greater (or equal) than                                      |
| <       | Integer  Date (UNIX Timestamp) | Lower (or equal) than                                        |
| ~        | String                         | Contains                                                     |
| !~       | String                         | Doesn't Contain                                              |
| ^        | String                         | Starts With                                                  |
| $        | String                         | Ends With                                                    |
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.conversations.searchConversations({
    query: {
        operator: "AND",
        value: [{
                field: "created_at",
                operator: ">",
                value: "1306054154"
            }]
    },
    pagination: {
        per_page: 5
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.SearchRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.conversations.<a href="/src/api/resources/unstable/resources/conversations/client/Client.ts">replyConversation</a>({ ...params }) -> Intercom.Conversation</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can reply to a conversation with a message from an admin or on behalf of a contact, or with a note for admins.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.conversations.replyConversation({
    id: "123 or \"last\"",
    body: {
        message_type: "comment",
        type: "user",
        body: "Thanks again :)",
        intercom_user_id: "6762f1571bb69f9f2193bbbb"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.ReplyConversationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.conversations.<a href="/src/api/resources/unstable/resources/conversations/client/Client.ts">manageConversation</a>({ ...params }) -> Intercom.Conversation</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

For managing conversations you can:
- Close a conversation
- Snooze a conversation to reopen on a future date
- Open a conversation which is `snoozed` or `closed`
- Assign a conversation to an admin and/or team.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.conversations.manageConversation({
    id: "123",
    body: {
        message_type: "close",
        type: "admin",
        admin_id: "12345"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.ManageConversationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.conversations.<a href="/src/api/resources/unstable/resources/conversations/client/Client.ts">attachContactToConversation</a>({ ...params }) -> Intercom.Conversation</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can add participants who are contacts to a conversation, on behalf of either another contact or an admin.

{% admonition type="warning" name="Contacts without an email" %}
If you add a contact via the email parameter and there is no user/lead found on that workspace with he given email, then we will create a new contact with `role` set to `lead`.
{% /admonition %}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.conversations.attachContactToConversation({
    id: "123",
    admin_id: "12345",
    customer: {
        intercom_user_id: "6762f19b1bb69f9f2193bbd4"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.AttachContactToConversationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.conversations.<a href="/src/api/resources/unstable/resources/conversations/client/Client.ts">detachContactFromConversation</a>({ ...params }) -> Intercom.Conversation</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can add participants who are contacts to a conversation, on behalf of either another contact or an admin.

{% admonition type="warning" name="Contacts without an email" %}
If you add a contact via the email parameter and there is no user/lead found on that workspace with he given email, then we will create a new contact with `role` set to `lead`.
{% /admonition %}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.conversations.detachContactFromConversation({
    conversation_id: "123",
    contact_id: "123",
    admin_id: "5017690"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.DetachContactFromConversationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.conversations.<a href="/src/api/resources/unstable/resources/conversations/client/Client.ts">redactConversation</a>({ ...params }) -> Intercom.Conversation</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can redact a conversation part or the source message of a conversation (as seen in the source object).

{% admonition type="info" name="Redacting parts and messages" %}
If you are redacting a conversation part, it must have a `body`. If you are redacting a source message, it must have been created by a contact. We will return a `conversation_part_not_redactable` error if these criteria are not met.
{% /admonition %}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.conversations.redactConversation({
    type: "conversation_part",
    conversation_id: "19894788788",
    conversation_part_id: "19381789428"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.RedactConversationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.conversations.<a href="/src/api/resources/unstable/resources/conversations/client/Client.ts">convertConversationToTicket</a>({ ...params }) -> Intercom.Ticket | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can convert a conversation to a ticket.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.conversations.convertConversationToTicket({
    id: 1,
    ticket_type_id: "53"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.ConvertConversationToTicketRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConversationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Unstable CustomChannelEvents
<details><summary><code>client.unstable.customChannelEvents.<a href="/src/api/resources/unstable/resources/customChannelEvents/client/Client.ts">notifyNewConversation</a>({ ...params }) -> Intercom.CustomChannelNotificationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Notifies Intercom that a new conversation was created in your custom channel/platform. This triggers conversation creation and workflow automations within Intercom for your custom channel integration.
> **Note:** This endpoint is currently under managed availability. Please reach out to your accounts team to discuss access and tailored, hands-on support.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.customChannelEvents.notifyNewConversation({
    event_id: "evt_12345",
    external_conversation_id: "conv_67890",
    contact: {
        type: "user",
        external_id: "user_001",
        name: "Jane Doe",
        email: "jane.doe@example.com"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.CustomChannelBaseEvent` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomChannelEventsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.customChannelEvents.<a href="/src/api/resources/unstable/resources/customChannelEvents/client/Client.ts">notifyNewMessage</a>({ ...params }) -> Intercom.CustomChannelNotificationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Notifies Intercom that a new message was sent in a conversation on your custom channel/platform. This allows Intercom to process the message and trigger any relevant workflow automations.
> **Note:** This endpoint is currently under managed availability. Please reach out to your accounts team to discuss access and tailored, hands-on support.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.customChannelEvents.notifyNewMessage({
    event_id: "evt_54321",
    external_conversation_id: "conv_98765",
    contact: {
        type: "user",
        external_id: "user_002",
        name: "John Smith",
        email: "john.smith@example.com"
    },
    body: "Hello, I need help with my order."
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.NotifyNewMessageRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomChannelEventsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.customChannelEvents.<a href="/src/api/resources/unstable/resources/customChannelEvents/client/Client.ts">notifyQuickReplySelected</a>({ ...params }) -> Intercom.CustomChannelNotificationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Notifies Intercom that a user selected a quick reply option in your custom channel/platform. This allows Intercom to process the response and trigger any relevant workflow automations.
> **Note:** This endpoint is currently under managed availability. Please reach out to your accounts team to discuss access and tailored, hands-on support.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.customChannelEvents.notifyQuickReplySelected({
    event_id: "evt_67890",
    external_conversation_id: "conv_13579",
    contact: {
        type: "user",
        external_id: "user_003",
        name: "Alice Example",
        email: "alice@example.com"
    },
    quick_reply_option_id: "1234"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.NotifyQuickReplySelectedRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomChannelEventsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.customChannelEvents.<a href="/src/api/resources/unstable/resources/customChannelEvents/client/Client.ts">notifyAttributeCollected</a>({ ...params }) -> Intercom.CustomChannelNotificationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Notifies Intercom that a user provided a response to an attribute collector in your custom channel/platform. This allows Intercom to process the attribute and trigger any relevant workflow automations.
> **Note:** This endpoint is currently under managed availability. Please reach out to your accounts team to discuss access and tailored, hands-on support.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.customChannelEvents.notifyAttributeCollected({
    event_id: "evt_24680",
    external_conversation_id: "conv_11223",
    contact: {
        type: "user",
        external_id: "user_004",
        name: "Bob Example",
        email: "bob@example.com"
    },
    attribute: {
        id: "shipping_address",
        value: "123 Main St, Springfield"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.NotifyAttributeCollectedRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomChannelEventsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Custom Object Instances
<details><summary><code>client.unstable.customObjectInstances.<a href="/src/api/resources/unstable/resources/customObjectInstances/client/Client.ts">getCustomObjectInstancesByExternalId</a>({ ...params }) -> Intercom.CustomObjectInstance | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetch a Custom Object Instance by external_id.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.customObjectInstances.getCustomObjectInstancesByExternalId({
    custom_object_type_identifier: "Order",
    external_id: "external_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.GetCustomObjectInstancesByExternalIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomObjectInstancesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.customObjectInstances.<a href="/src/api/resources/unstable/resources/customObjectInstances/client/Client.ts">createCustomObjectInstances</a>({ ...params }) -> Intercom.CustomObjectInstance | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create or update a custom object instance
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.customObjectInstances.createCustomObjectInstances({
    custom_object_type_identifier: "Order",
    external_id: "123",
    external_created_at: 1392036272,
    external_updated_at: 1392036272,
    custom_attributes: {
        "order_number": "ORDER-12345",
        "total_amount": "custom_attributes"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.CreateOrUpdateCustomObjectInstanceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomObjectInstancesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.customObjectInstances.<a href="/src/api/resources/unstable/resources/customObjectInstances/client/Client.ts">deleteCustomObjectInstancesById</a>({ ...params }) -> Intercom.CustomObjectInstanceDeleted</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a single Custom Object instance by external_id.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.customObjectInstances.deleteCustomObjectInstancesById({
    custom_object_type_identifier: "Order",
    external_id: "external_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.DeleteCustomObjectInstancesByIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomObjectInstancesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.customObjectInstances.<a href="/src/api/resources/unstable/resources/customObjectInstances/client/Client.ts">getCustomObjectInstancesById</a>({ ...params }) -> Intercom.CustomObjectInstance | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetch a Custom Object Instance by id.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.customObjectInstances.getCustomObjectInstancesById({
    custom_object_type_identifier: "Order",
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.GetCustomObjectInstancesByIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomObjectInstancesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.customObjectInstances.<a href="/src/api/resources/unstable/resources/customObjectInstances/client/Client.ts">deleteCustomObjectInstancesByExternalId</a>({ ...params }) -> Intercom.CustomObjectInstanceDeleted</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a single Custom Object instance using the Intercom defined id.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.customObjectInstances.deleteCustomObjectInstancesByExternalId({
    custom_object_type_identifier: "Order",
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.DeleteCustomObjectInstancesByExternalIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomObjectInstancesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Data Attributes
<details><summary><code>client.unstable.dataAttributes.<a href="/src/api/resources/unstable/resources/dataAttributes/client/Client.ts">lisDataAttributes</a>({ ...params }) -> Intercom.DataAttributeList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all data attributes belonging to a workspace for contacts, companies or conversations.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.dataAttributes.lisDataAttributes({
    model: "contact",
    include_archived: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.LisDataAttributesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataAttributesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.dataAttributes.<a href="/src/api/resources/unstable/resources/dataAttributes/client/Client.ts">createDataAttribute</a>({ ...params }) -> Intercom.DataAttribute</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a data attributes for a `contact` or a `company`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.dataAttributes.createDataAttribute({
    "key": "value"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `unknown` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataAttributesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.dataAttributes.<a href="/src/api/resources/unstable/resources/dataAttributes/client/Client.ts">updateDataAttribute</a>({ ...params }) -> Intercom.DataAttribute</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>


You can update a data attribute.

> 🚧 Updating the data type is not possible
>
> It is currently a dangerous action to execute changing a data attribute's type via the API. You will need to update the type via the UI instead.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.dataAttributes.updateDataAttribute({
    id: 1,
    body: {
        "key": "value"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.UpdateDataAttributeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataAttributesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Data Events
<details><summary><code>client.unstable.dataEvents.<a href="/src/api/resources/unstable/resources/dataEvents/client/Client.ts">lisDataEvents</a>({ ...params }) -> Intercom.DataEventSummary</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>


> 🚧
>
> Please note that you can only 'list' events that are less than 90 days old. Event counts and summaries will still include your events older than 90 days but you cannot 'list' these events individually if they are older than 90 days

The events belonging to a customer can be listed by sending a GET request to `https://api.intercom.io/events` with a user or lead identifier along with a `type` parameter. The identifier parameter can be one of `user_id`, `email` or `intercom_user_id`. The `type` parameter value must be `user`.

- `https://api.intercom.io/events?type=user&user_id={user_id}`
- `https://api.intercom.io/events?type=user&email={email}`
- `https://api.intercom.io/events?type=user&intercom_user_id={id}` (this call can be used to list leads)

The `email` parameter value should be [url encoded](http://en.wikipedia.org/wiki/Percent-encoding) when sending.

You can optionally define the result page size as well with the `per_page` parameter.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.dataEvents.lisDataEvents({
    filter: {
        user_id: "user_id"
    },
    type: "type"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.LisDataEventsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataEventsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.dataEvents.<a href="/src/api/resources/unstable/resources/dataEvents/client/Client.ts">createDataEvent</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>


You will need an Access Token that has write permissions to send Events. Once you have a key you can submit events via POST to the Events resource, which is located at https://api.intercom.io/events, or you can send events using one of the client libraries. When working with the HTTP API directly a client should send the event with a `Content-Type` of `application/json`.

When using the JavaScript API, [adding the code to your app](http://docs.intercom.io/configuring-Intercom/tracking-user-events-in-your-app) makes the Events API available. Once added, you can submit an event using the `trackEvent` method. This will associate the event with the Lead or currently logged-in user or logged-out visitor/lead and send it to Intercom. The final parameter is a map that can be used to send optional metadata about the event.

With the Ruby client you pass a hash describing the event to `Intercom::Event.create`, or call the `track_user` method directly on the current user object (e.g. `user.track_event`).

**NB: For the JSON object types, please note that we do not currently support nested JSON structure.**

| Type            | Description                                                                                                                                                                                                     | Example                                                                           |
| :-------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------- |
| String          | The value is a JSON String                                                                                                                                                                                      | `"source":"desktop"`                                                              |
| Number          | The value is a JSON Number                                                                                                                                                                                      | `"load": 3.67`                                                                    |
| Date            | The key ends with the String `_date` and the value is a [Unix timestamp](http://en.wikipedia.org/wiki/Unix_time), assumed to be in the [UTC](http://en.wikipedia.org/wiki/Coordinated_Universal_Time) timezone. | `"contact_date": 1392036272`                                                      |
| Link            | The value is a HTTP or HTTPS URI.                                                                                                                                                                               | `"article": "https://example.org/ab1de.html"`                                     |
| Rich Link       | The value is a JSON object that contains `url` and `value` keys.                                                                                                                                                | `"article": {"url": "https://example.org/ab1de.html", "value":"the dude abides"}` |
| Monetary Amount | The value is a JSON object that contains `amount` and `currency` keys. The `amount` key is a positive integer representing the amount in cents. The price in the example to the right denotes €349.99.          | `"price": {"amount": 34999, "currency": "eur"}`                                   |

**Lead Events**

When submitting events for Leads, you will need to specify the Lead's `id`.

**Metadata behaviour**

- We currently limit the number of tracked metadata keys to 10 per event. Once the quota is reached, we ignore any further keys we receive. The first 10 metadata keys are determined by the order in which they are sent in with the event.
- It is not possible to change the metadata keys once the event has been sent. A new event will need to be created with the new keys and you can archive the old one.
- There might be up to 24 hrs delay when you send a new metadata for an existing event.

**Event de-duplication**

The API may detect and ignore duplicate events. Each event is uniquely identified as a combination of the following data - the Workspace identifier, the Contact external identifier, the Data Event name and the Data Event created time. As a result, it is **strongly recommended** to send a second granularity Unix timestamp in the `created_at` field.

Duplicated events are responded to using the normal `202 Accepted` code - an error is not thrown, however repeat requests will be counted against any rate limit that is in place.

### HTTP API Responses

- Successful responses to submitted events return `202 Accepted` with an empty body.
- Unauthorised access will be rejected with a `401 Unauthorized` or `403 Forbidden` response code.
- Events sent about users that cannot be found will return a `404 Not Found`.
- Event lists containing duplicate events will have those duplicates ignored.
- Server errors will return a `500` response code and may contain an error message in the body.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.dataEvents.createDataEvent({
    "key": "value"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.CreateDataEventRequestTwo` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataEventsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.dataEvents.<a href="/src/api/resources/unstable/resources/dataEvents/client/Client.ts">dataEventSummaries</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create event summaries for a user. Event summaries are used to track the number of times an event has occurred, the first time it occurred and the last time it occurred.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.dataEvents.dataEventSummaries();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.CreateDataEventSummariesRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataEventsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Data Export
<details><summary><code>client.unstable.dataExport.<a href="/src/api/resources/unstable/resources/dataExport/client/Client.ts">createDataExport</a>({ ...params }) -> Intercom.DataExport</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

To create your export job, you need to send a `POST` request to the export endpoint `https://api.intercom.io/export/content/data`.

The only parameters you need to provide are the range of dates that you want exported.

>🚧 Limit of one active job
>
> You can only have one active job per workspace. You will receive a HTTP status code of 429 with the message Exceeded rate limit of 1 pending message data export jobs if you attempt to create a second concurrent job.

>❗️ Updated_at not included
>
> It should be noted that the timeframe only includes messages sent during the time period and not messages that were only updated during this period. For example, if a message was updated yesterday but sent two days ago, you would need to set the created_at_after date before the message was sent to include that in your retrieval job.

>📘 Date ranges are inclusive
>
> Requesting data for 2018-06-01 until 2018-06-30 will get all data for those days including those specified - e.g. 2018-06-01 00:00:00 until 2018-06-30 23:59:99.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.dataExport.createDataExport({
    created_at_after: 1734519776,
    created_at_before: 1734537776
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.CreateDataExportsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.dataExport.<a href="/src/api/resources/unstable/resources/dataExport/client/Client.ts">getDataExport</a>({ ...params }) -> Intercom.DataExport</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can view the status of your job by sending a `GET` request to the URL
`https://api.intercom.io/export/content/data/{job_identifier}` - the `{job_identifier}` is the value returned in the response when you first created the export job. More on it can be seen in the Export Job Model.

> 🚧 Jobs expire after two days
> All jobs that have completed processing (and are thus available to download from the provided URL) will have an expiry limit of two days from when the export ob completed. After this, the data will no longer be available.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.dataExport.getDataExport({
    job_identifier: "job_identifier"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.GetDataExportRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.dataExport.<a href="/src/api/resources/unstable/resources/dataExport/client/Client.ts">cancelDataExport</a>({ ...params }) -> Intercom.DataExport</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can cancel your job
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.dataExport.cancelDataExport({
    job_identifier: "job_identifier"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.CancelDataExportRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.dataExport.<a href="/src/api/resources/unstable/resources/dataExport/client/Client.ts">downloadDataExport</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

When a job has a status of complete, and thus a filled download_url, you can download your data by hitting that provided URL, formatted like so: https://api.intercom.io/download/content/data/xyz1234.

Your exported message data will be streamed continuously back down to you in a gzipped CSV format.

> 📘 Octet header required
>
> You will have to specify the header Accept: `application/octet-stream` when hitting this endpoint.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.dataExport.downloadDataExport({
    job_identifier: "job_identifier"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.DownloadDataExportRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DataExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Jobs
<details><summary><code>client.unstable.jobs.<a href="/src/api/resources/unstable/resources/jobs/client/Client.ts">status</a>({ ...params }) -> Intercom.Jobs</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve the status of job execution.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.jobs.status({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.JobsStatusRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Macros
<details><summary><code>client.unstable.macros.<a href="/src/api/resources/unstable/resources/macros/client/Client.ts">listMacros</a>({ ...params }) -> Intercom.MacroList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all macros (saved replies) in your workspace for use in automating responses.

The macros are returned in descending order by updated_at.

**Pagination**

This endpoint uses cursor-based pagination via the `starting_after` parameter. The cursor is a Base64-encoded JSON array containing `[updated_at, id]` of the last item from the previous page.

**Placeholder Transformation**

The API transforms Intercom placeholders to a more standard XML-like format:
- From: `{{user.name | fallback: 'there'}}`
- To: `<attribute key="user.name" default="there"/>`
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.macros.listMacros({
    per_page: 1,
    starting_after: "WzE3MTk0OTM3NTcuMCwgIjEyMyJd",
    updated_since: 1000000
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.ListMacrosRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MacrosClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.macros.<a href="/src/api/resources/unstable/resources/macros/client/Client.ts">getMacro</a>({ ...params }) -> Intercom.Macro | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a single macro (saved reply) by its ID. The macro will only be returned if it is visible to the authenticated user based on its visibility settings.

**Visibility Rules**

A macro is returned based on its `visible_to` setting:
- `everyone`: Always visible to all team members
- `specific_teams`: Only visible if the authenticated user belongs to one of the teams specified in `visible_to_team_ids`

If a macro exists but is not visible to the authenticated user, a 404 error is returned.

**Placeholder Transformation**

The API transforms Intercom placeholders to a more standard XML-like format in the `body` field:
- From: `{{user.name | fallback: 'there'}}`
- To: `<attribute key="user.name" default="there"/>`

Default values in placeholders are HTML-escaped for security.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.macros.getMacro({
    id: "123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.GetMacroRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MacrosClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Messages
<details><summary><code>client.unstable.messages.<a href="/src/api/resources/unstable/resources/messages/client/Client.ts">createMessage</a>({ ...params }) -> Intercom.Message</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a message that has been initiated by an admin. The conversation can be either an in-app message, an email, sms or whatsapp.

> 🚧 Sending for visitors
>
> There can be a short delay between when a contact is created and when a contact becomes available to be messaged through the API. A 404 Not Found error will be returned in this case.

This will return the Message model that has been created.

> 🚧 Retrieving Associated Conversations
>
> As this is a message, there will be no conversation present until the contact responds. Once they do, you will have to search for a contact's conversations with the id of the message.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.messages.createMessage({
    "from": {
        "type": "user",
        "id": "6762f2341bb69f9f2193bc17"
    },
    "body": "heyy",
    "referer": "https://twitter.com/bob"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.CreateMessageRequest | undefined` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MessagesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.messages.<a href="/src/api/resources/unstable/resources/messages/client/Client.ts">getWhatsAppMessageStatus</a>({ ...params }) -> Intercom.WhatsappMessageStatusList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves statuses of messages sent from the Outbound module. Currently, this API only supports WhatsApp messages.


This endpoint returns paginated status events for WhatsApp messages sent via the Outbound module, providing
information about delivery state and related message details.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.messages.getWhatsAppMessageStatus({
    ruleset_id: "ruleset_id",
    per_page: 1,
    starting_after: "starting_after"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.GetWhatsAppMessageStatusRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `MessagesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## News
<details><summary><code>client.unstable.news.<a href="/src/api/resources/unstable/resources/news/client/Client.ts">listNewsItems</a>() -> Intercom.PaginatedResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all news items
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.news.listNewsItems();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `NewsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.news.<a href="/src/api/resources/unstable/resources/news/client/Client.ts">createNewsItem</a>({ ...params }) -> Intercom.NewsItem</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a news item
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.news.createNewsItem({
    title: "Halloween is here!",
    body: "<p>New costumes in store for this spooky season</p>",
    sender_id: 991267834,
    state: "live",
    deliver_silently: true,
    labels: ["Product", "Update", "New"],
    reactions: ["\uD83D\uDE06", "\uD83D\uDE05"],
    newsfeed_assignments: [{
            newsfeed_id: 53,
            published_at: 1664638214
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.NewsItemRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NewsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.news.<a href="/src/api/resources/unstable/resources/news/client/Client.ts">retrieveNewsItem</a>({ ...params }) -> Intercom.NewsItem</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single news item.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.news.retrieveNewsItem({
    id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.RetrieveNewsItemRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NewsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.news.<a href="/src/api/resources/unstable/resources/news/client/Client.ts">updateNewsItem</a>({ ...params }) -> Intercom.NewsItem</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.news.updateNewsItem({
    id: 1,
    body: {
        title: "Christmas is here!",
        body: "<p>New gifts in store for the jolly season</p>",
        sender_id: 991267845,
        reactions: ["\uD83D\uDE1D", "\uD83D\uDE02"]
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.UpdateNewsItemRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NewsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.news.<a href="/src/api/resources/unstable/resources/news/client/Client.ts">deleteNewsItem</a>({ ...params }) -> Intercom.DeletedObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can delete a single news item.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.news.deleteNewsItem({
    id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.DeleteNewsItemRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NewsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.news.<a href="/src/api/resources/unstable/resources/news/client/Client.ts">listLiveNewsfeedItems</a>({ ...params }) -> Intercom.PaginatedResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all news items that are live on a given newsfeed
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.news.listLiveNewsfeedItems({
    id: "123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.ListLiveNewsfeedItemsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NewsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.news.<a href="/src/api/resources/unstable/resources/news/client/Client.ts">listNewsfeeds</a>() -> Intercom.PaginatedResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all newsfeeds
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.news.listNewsfeeds();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `NewsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.news.<a href="/src/api/resources/unstable/resources/news/client/Client.ts">retrieveNewsfeed</a>({ ...params }) -> Intercom.Newsfeed</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single newsfeed
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.news.retrieveNewsfeed({
    id: "123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.RetrieveNewsfeedRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NewsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Segments
<details><summary><code>client.unstable.segments.<a href="/src/api/resources/unstable/resources/segments/client/Client.ts">listSegments</a>({ ...params }) -> Intercom.SegmentList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch a list of all segments.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.segments.listSegments({
    include_count: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.ListSegmentsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SegmentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.segments.<a href="/src/api/resources/unstable/resources/segments/client/Client.ts">retrieveSegment</a>({ ...params }) -> Intercom.Segment</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single segment.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.segments.retrieveSegment({
    id: "123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.RetrieveSegmentRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SegmentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Switch
<details><summary><code>client.unstable.switch.<a href="/src/api/resources/unstable/resources/switch/client/Client.ts">createPhoneSwitch</a>({ ...params }) -> Intercom.PhoneSwitch | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can use the API to deflect phone calls to the Intercom Messenger.
Calling this endpoint will send an SMS with a link to the Messenger to the phone number specified.

If custom attributes are specified, they will be added to the user or lead's custom data attributes.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.switch.createPhoneSwitch({
    "key": "value"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `unknown` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SwitchClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Calls
<details><summary><code>client.unstable.calls.<a href="/src/api/resources/unstable/resources/calls/client/Client.ts">listCalls</a>({ ...params }) -> Intercom.CallList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a paginated list of calls.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.calls.listCalls({
    page: 1,
    per_page: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.ListCallsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CallsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.calls.<a href="/src/api/resources/unstable/resources/calls/client/Client.ts">showCall</a>({ ...params }) -> Intercom.Call</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a single call by id.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.calls.showCall({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.ShowCallRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CallsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.calls.<a href="/src/api/resources/unstable/resources/calls/client/Client.ts">showCallRecording</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Redirects to a signed URL for the call's recording if it exists.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.calls.showCallRecording({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.ShowCallRecordingRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CallsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.calls.<a href="/src/api/resources/unstable/resources/calls/client/Client.ts">showCallTranscript</a>({ ...params }) -> string</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the transcript for the specified call as a downloadable text file.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.calls.showCallTranscript({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.ShowCallTranscriptRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CallsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.calls.<a href="/src/api/resources/unstable/resources/calls/client/Client.ts">listCallsWithTranscripts</a>({ ...params }) -> Intercom.ListCallsWithTranscriptsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve calls by a list of conversation ids and include transcripts when available.
A maximum of 20 `conversation_ids` can be provided. If none are provided or more than 20 are provided, a 400 error is returned.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.calls.listCallsWithTranscripts({
    conversation_ids: ["64619700005694", "64619700005695"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.ListCallsWithTranscriptsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CallsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.calls.<a href="/src/api/resources/unstable/resources/calls/client/Client.ts">registerFinVoiceCall</a>({ ...params }) -> Intercom.AiCallResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Register a Fin Voice call with Intercom. This endpoint creates an external reference
that links an external call identifier to an Intercom call and conversation.

The call can be from different sources:
- AWS Connect (default)
- Five9
- Zoom Phone
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.calls.registerFinVoiceCall({
    phone_number: "+1234567890",
    call_id: "call-123-abc"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.RegisterFinVoiceCallRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CallsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.calls.<a href="/src/api/resources/unstable/resources/calls/client/Client.ts">collectFinVoiceCallById</a>({ ...params }) -> Intercom.AiCallResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve information about a Fin Voice call using the external reference ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.calls.collectFinVoiceCallById({
    id: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.CollectFinVoiceCallByIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CallsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.calls.<a href="/src/api/resources/unstable/resources/calls/client/Client.ts">collectFinVoiceCallByExternalId</a>({ ...params }) -> Intercom.AiCallResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve information about a Fin Voice call using the external call identifier.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.calls.collectFinVoiceCallByExternalId({
    external_id: "external_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.CollectFinVoiceCallByExternalIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CallsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.calls.<a href="/src/api/resources/unstable/resources/calls/client/Client.ts">collectFinVoiceCallByPhoneNumber</a>({ ...params }) -> Intercom.Error_</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve information about a Fin Voice call using the phone number.

Returns the most recent matched call for the given phone number, ordered by creation date.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.calls.collectFinVoiceCallByPhoneNumber({
    phone_number: "phone_number"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.CollectFinVoiceCallByPhoneNumberRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CallsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Teams
<details><summary><code>client.unstable.teams.<a href="/src/api/resources/unstable/resources/teams/client/Client.ts">listTeams</a>() -> Intercom.TeamList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This will return a list of team objects for the App.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.teams.listTeams();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `TeamsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.teams.<a href="/src/api/resources/unstable/resources/teams/client/Client.ts">retrieveTeam</a>({ ...params }) -> Intercom.Team</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single team, containing an array of admins that belong to this team.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.teams.retrieveTeam({
    id: "123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.RetrieveTeamRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TeamsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ticket States
<details><summary><code>client.unstable.ticketStates.<a href="/src/api/resources/unstable/resources/ticketStates/client/Client.ts">listTicketStates</a>() -> Intercom.TicketStateList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can get a list of all ticket states for a workspace.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.ticketStates.listTicketStates();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `TicketStatesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ticket Type Attributes
<details><summary><code>client.unstable.ticketTypeAttributes.<a href="/src/api/resources/unstable/resources/ticketTypeAttributes/client/Client.ts">createTicketTypeAttribute</a>({ ...params }) -> Intercom.TicketTypeAttribute | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a new attribute for a ticket type.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.ticketTypeAttributes.createTicketTypeAttribute({
    ticket_type_id: "ticket_type_id",
    name: "Attribute Title",
    description: "Attribute Description",
    data_type: "string",
    required_to_create: false
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.CreateTicketTypeAttributeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TicketTypeAttributesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.ticketTypeAttributes.<a href="/src/api/resources/unstable/resources/ticketTypeAttributes/client/Client.ts">updateTicketTypeAttribute</a>({ ...params }) -> Intercom.TicketTypeAttribute | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can update an existing attribute for a ticket type.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.ticketTypeAttributes.updateTicketTypeAttribute({
    ticket_type_id: "ticket_type_id",
    id: "id",
    description: "New Attribute Description"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.UpdateTicketTypeAttributeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TicketTypeAttributesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ticket Types
<details><summary><code>client.unstable.ticketTypes.<a href="/src/api/resources/unstable/resources/ticketTypes/client/Client.ts">listTicketTypes</a>() -> Intercom.TicketTypeList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can get a list of all ticket types for a workspace.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.ticketTypes.listTicketTypes();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `TicketTypesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.ticketTypes.<a href="/src/api/resources/unstable/resources/ticketTypes/client/Client.ts">createTicketType</a>({ ...params }) -> Intercom.TicketType | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can create a new ticket type.
> 📘 Creating ticket types.
>
> Every ticket type will be created with two default attributes: _default_title_ and _default_description_.
> For the `icon` propery, use an emoji from [Twemoji Cheatsheet](https://twemoji-cheatsheet.vercel.app/)
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.ticketTypes.createTicketType({
    "key": "value"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `unknown` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TicketTypesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.ticketTypes.<a href="/src/api/resources/unstable/resources/ticketTypes/client/Client.ts">getTicketType</a>({ ...params }) -> Intercom.TicketType | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single ticket type.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.ticketTypes.getTicketType({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.GetTicketTypeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TicketTypesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Tickets
<details><summary><code>client.unstable.tickets.<a href="/src/api/resources/unstable/resources/tickets/client/Client.ts">replyTicket</a>({ ...params }) -> Intercom.TicketReply</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can reply to a ticket with a message from an admin or on behalf of a contact, or with a note for admins.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.tickets.replyTicket({
    id: "123",
    body: {
        message_type: "comment",
        type: "user",
        body: "Thanks again :)",
        intercom_user_id: "6762f2971bb69f9f2193bc49"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.ReplyTicketRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TicketsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.tickets.<a href="/src/api/resources/unstable/resources/tickets/client/Client.ts">enqueueCreateTicket</a>({ ...params }) -> Intercom.Jobs</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Enqueues ticket creation for asynchronous processing, returning if the job was enqueued successfully to be processed. We attempt to perform a best-effort validation on inputs before tasks are enqueued. If the given parameters are incorrect, we won't enqueue the job.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.tickets.enqueueCreateTicket({
    ticket_type_id: "1234",
    contacts: [{
            id: "6762f2d81bb69f9f2193bc54"
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.EnqueueCreateTicketRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TicketsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.tickets.<a href="/src/api/resources/unstable/resources/tickets/client/Client.ts">getTicket</a>({ ...params }) -> Intercom.Ticket | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single ticket.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.tickets.getTicket({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.GetTicketRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TicketsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.tickets.<a href="/src/api/resources/unstable/resources/tickets/client/Client.ts">updateTicket</a>({ ...params }) -> Intercom.Ticket | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can update a ticket.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.tickets.updateTicket({
    id: "id",
    ticket_attributes: {
        "_default_title_": "example",
        "_default_description_": "there is a problem"
    },
    ticket_state_id: "123",
    open: true,
    snoozed_until: 1673609604,
    admin_id: 991268011,
    assignee_id: "123"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.UpdateTicketRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TicketsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.tickets.<a href="/src/api/resources/unstable/resources/tickets/client/Client.ts">deleteTicket</a>({ ...params }) -> Intercom.DeleteTicketResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can delete a ticket using the Intercom provided ID.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.tickets.deleteTicket({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.DeleteTicketRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TicketsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.tickets.<a href="/src/api/resources/unstable/resources/tickets/client/Client.ts">searchTickets</a>({ ...params }) -> Intercom.TicketList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can search for multiple tickets by the value of their attributes in order to fetch exactly which ones you want.

To search for tickets, you send a `POST` request to `https://api.intercom.io/tickets/search`.

This will accept a query object in the body which will define your filters.
{% admonition type="warning" name="Optimizing search queries" %}
  Search queries can be complex, so optimizing them can help the performance of your search.
  Use the `AND` and `OR` operators to combine multiple filters to get the exact results you need and utilize
  pagination to limit the number of results returned. The default is `20` results per page.
  See the [pagination section](https://developers.intercom.com/docs/build-an-integration/learn-more/rest-apis/pagination/#example-search-conversations-request) for more details on how to use the `starting_after` param.
{% /admonition %}

### Nesting & Limitations

You can nest these filters in order to get even more granular insights that pinpoint exactly what you need. Example: (1 OR 2) AND (3 OR 4).
There are some limitations to the amount of multiples there can be:
- There's a limit of max 2 nested filters
- There's a limit of max 15 filters for each AND or OR group

### Accepted Fields

Most keys listed as part of the Ticket model are searchable, whether writeable or not. The value you search for has to match the accepted type, otherwise the query will fail (ie. as `created_at` accepts a date, the `value` cannot be a string such as `"foobar"`).
The `source.body` field is unique as the search will not be performed against the entire value, but instead against every element of the value separately. For example, when searching for a conversation with a `"I need support"` body - the query should contain a `=` operator with the value `"support"` for such conversation to be returned. A query with a `=` operator and a `"need support"` value will not yield a result.

| Field                                     | Type                                                                                     |
| :---------------------------------------- | :--------------------------------------------------------------------------------------- |
| id                                        | String                                                                                   |
| created_at                                | Date (UNIX timestamp)                                                                    |
| updated_at                                | Date (UNIX timestamp)                                                                    |
| title                           | String                                                                                   |
| description                     | String                                                                                   |
| category                                  | String                                                                                   |
| ticket_type_id                            | String                                                                                   |
| contact_ids                               | String                                                                                   |
| teammate_ids                              | String                                                                                   |
| admin_assignee_id                         | String                                                                                   |
| team_assignee_id                          | String                                                                                   |
| open                                      | Boolean                                                                                  |
| state                                     | String                                                                                   |
| snoozed_until                             | Date (UNIX timestamp)                                                                    |
| ticket_attribute.{id}                     | String or Boolean or Date (UNIX timestamp) or Float or Integer                           |

{% admonition type="info" name="Searching by Category" %}
When searching for tickets by the **`category`** field, specific terms must be used instead of the category names:
* For **Customer** category tickets, use the term `request`.
* For **Back-office** category tickets, use the term `task`.
* For **Tracker** category tickets, use the term `tracker`.
{% /admonition %}

### Accepted Operators

{% admonition type="info" name="Searching based on `created_at`" %}
  You may use the `<=` or `>=` operators to search by `created_at`.
{% /admonition %}

The table below shows the operators you can use to define how you want to search for the value.  The operator should be put in as a string (`"="`). The operator has to be compatible with the field's type  (eg. you cannot search with `>` for a given string value as it's only compatible for integer's and dates).

| Operator | Valid Types                    | Description                                                  |
| :------- | :----------------------------- | :----------------------------------------------------------- |
| =        | All                            | Equals                                                       |
| !=       | All                            | Doesn't Equal                                                |
| IN       | All                            | In  Shortcut for `OR` queries  Values most be in Array       |
| NIN      | All                            | Not In  Shortcut for `OR !` queries  Values must be in Array |
| >        | Integer  Date (UNIX Timestamp) | Greater (or equal) than                                      |
| <       | Integer  Date (UNIX Timestamp) | Lower (or equal) than                                        |
| ~        | String                         | Contains                                                     |
| !~       | String                         | Doesn't Contain                                              |
| ^        | String                         | Starts With                                                  |
| $        | String                         | Ends With                                                    |
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.tickets.searchTickets({
    query: {
        operator: "AND",
        value: [{
                field: "created_at",
                operator: ">",
                value: "1306054154"
            }]
    },
    pagination: {
        per_page: 5
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.SearchRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TicketsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Visitors
<details><summary><code>client.unstable.visitors.<a href="/src/api/resources/unstable/resources/visitors/client/Client.ts">retrieveVisitorWithUserId</a>({ ...params }) -> Intercom.Visitor | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can fetch the details of a single visitor.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.visitors.retrieveVisitorWithUserId({
    user_id: "user_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.RetrieveVisitorWithUserIdRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VisitorsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.visitors.<a href="/src/api/resources/unstable/resources/visitors/client/Client.ts">updateVisitor</a>({ ...params }) -> Intercom.Visitor | undefined</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Sending a PUT request to `/visitors` will result in an update of an existing Visitor.

**Option 1.** You can update a visitor by passing in the `user_id` of the visitor in the Request body.

**Option 2.** You can update a visitor by passing in the `id` of the visitor in the Request body.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.visitors.updateVisitor({
    "id": "6762f30c1bb69f9f2193bc5e",
    "name": "Gareth Bale"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.UpdateVisitorRequestOne` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VisitorsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.visitors.<a href="/src/api/resources/unstable/resources/visitors/client/Client.ts">convertVisitor</a>({ ...params }) -> Intercom.Contact</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

You can merge a Visitor to a Contact of role type `lead` or `user`.

> 📘 What happens upon a visitor being converted?
>
> If the User exists, then the Visitor will be merged into it, the Visitor deleted and the User returned. If the User does not exist, the Visitor will be converted to a User, with the User identifiers replacing it's Visitor identifiers.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.visitors.convertVisitor({
    type: "user",
    user: {
        "email": "foo@bar.com"
    },
    visitor: {
        "user_id": "3ecf64d0-9ed1-4e9f-88e1-da7d6e6782f3"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.ConvertVisitorRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VisitorsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Brands
<details><summary><code>client.unstable.brands.<a href="/src/api/resources/unstable/resources/brands/client/Client.ts">listBrands</a>() -> Intercom.BrandList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves all brands for the workspace, including the default brand.
The default brand id always matches the workspace
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.brands.listBrands();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `BrandsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.brands.<a href="/src/api/resources/unstable/resources/brands/client/Client.ts">retrieveBrand</a>({ ...params }) -> Intercom.Brand</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetches a specific brand by its unique identifier
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.brands.retrieveBrand({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.RetrieveBrandRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BrandsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Emails
<details><summary><code>client.unstable.emails.<a href="/src/api/resources/unstable/resources/emails/client/Client.ts">listEmails</a>() -> Intercom.EmailList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Lists all sender email address settings for the workspace
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.emails.listEmails();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `EmailsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.unstable.emails.<a href="/src/api/resources/unstable/resources/emails/client/Client.ts">retrieveEmail</a>({ ...params }) -> Intercom.EmailSetting</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetches a specific email setting by its unique identifier
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.unstable.emails.retrieveEmail({
    id: "id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Intercom.unstable.RetrieveEmailRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EmailsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>
