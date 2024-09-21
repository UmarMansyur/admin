<template>
  <Layout>
    <h4 class="text-4xl font-bold my-3">Setting</h4>
    <NavBarSetting />
    <SocialMedia />
    <StatusPartner />
    <IndustryCategory />
    <InterestCategory />
    <CampaignSupport />
    <CampaignType />
    <Task />
    <ServiceCategory/>
    <MemberCategory/>
  </Layout>

</template>

<script setup lang="ts">
import Layout from './Layout.vue';
import NavBarSetting from '../../components/NavBarSetting.vue';
import SocialMedia from './SocialMedia.vue';
import StatusPartner from './StatusPartner.vue';
import IndustryCategory from './IndustryCategory.vue';
import InterestCategory from './InterestCategory.vue';
import CampaignSupport from './CampaignSupport.vue';
import CampaignType from './CampaignType.vue';
import Task from './Task.vue';
import ServiceCategory from './ServiceCategory.vue';
import MemberCategory from './MemberCategory.vue';
</script>
